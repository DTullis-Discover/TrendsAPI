from django.shortcuts import render
from pytrends.request import TrendReq
import pandas as pd
import json, time, re
from gifs.home.models import Keyword, Trend
from django.core import serializers
from django.views.generic import ListView
from django.views.generic import DetailView
from django.db.models import Count
from django.utils import timezone
from django.contrib import messages

#################################################################
# Start Sam's Views                                             #
#################################################################

'''
This view will simply list all the current keyword objects that we have.
'''
def listKeywords(request):
    # figure out which keywords have appeared the most
    # NOTE: .order_by('-value'): minus sign in front of value to give descending order
    temp = Trend.objects.values('keyword__name').annotate(keyword_count=Count('keyword__name')).order_by('-keyword_count')
    #print(temp)
    names = [x["keyword__name"] for x in temp]

    # perform another query with results to get desired data structure
    keywords = []
    # weird syntax here gets content from returned Queryset and puts it into a list so it can be concatenated
    for x in names:
        keywords = keywords + [Keyword.objects.filter(name=x)[0]]

    return render(request, "pages/list.html", {"keywords": keywords})


'''
This view will take a PK for a keyword.
It will then return all trend objects associated with it.
It also returns keyword title for H1 in html template.
'''
def showTrend(request, pk):

    keywordName = Keyword.objects.filter(pk=pk).last()

    trends = serializers.serialize(
            "json", 
            Trend.objects.filter(keyword__pk=pk), 
            use_natural_foreign_keys=True
    )

    context = {
    "keywordName": keywordName,
    "props": {
            "trends": trends,
        }
    }

    return render(request, "pages/detail.html", context)

#################################################################
# Start Ben's Views                                             #
#################################################################

def home(request):

    regex1 = r"""
                [^a-zA-Z0-9 ] # [^] = match any character not in the set
                              # set = all characters a-z, A-Z, 0-9 and spaces
                """
    pattern1 = re.compile(regex1, re.VERBOSE)

    # Generating list of lists of currently trending keywords with punctuation stripped.
    # Punctuation breaks .interest_over_time() method in some cases at least.
    # .interest_over_time() expects a list for parameter kw_list

    try:
        pytrends = TrendReq(hl='en-US', tz=360)
        response = pytrends.trending_searches(pn='united_states')
        data = json.loads(response.to_json())["0"]
        keyword_list = [[pattern1.sub(" ", value)] for key, value in data.items()]
        #print("keyword_list:", keyword_list)

    except Exception as e:
        keyword_list = []
        print()
        print("error trending_searches: google is probably rate-limiting you: ", e)
        print()
        messages.warning(request, "You've already hit the API: trending_searches.")


    # Get interest over time and store in single dataframe
    combined_df = pd.DataFrame()

    # alternative way to clean your database
    """
    print("Trend.objects.all():/n", Trend.objects.all())
    Trend.objects.all().delete()
    print("Trend.objects.all():/n", Trend.objects.all())
    print("Keyword.objects.all():/n", Keyword.objects.all())
    Keyword.objects.all().delete()
    print("Keyword.objects.all():/n", Keyword.objects.all())
    """

    try:
        # search for each item separately
        for term in keyword_list: 
            pytrends.build_payload(kw_list=term, cat=0, timeframe='now 1-d', geo='US', gprop='')
            time.sleep(1)
            # make call
            data = pytrends.interest_over_time()
            # drop unused column
            data = data.drop(labels=['isPartial'], axis='columns')
            # convert index into str from Datetime
            new_index = data.index.astype('str')
            data = data.set_index(new_index)
            # convert dataframe to dictionary and remove keyword
            data2 = data.to_dict()[term[0]]
            #print(data2)
            
            if Keyword.objects.filter(name=term[0]).exists():
                # if keyword already exists, get old object. save only the trend
                print("object with name '{}' already exists in the db".format(term[0]))
                # .filter() returns a list, so object will be at [0]
                keyword = Keyword.objects.filter(name=term[0])[0]
                #trend = Trend(data=str(data.to_json()), keyword=keyword)
                trend = Trend(data=json.dumps(data2), keyword=keyword)
                trend.save()
            else:
                # if keyword is new, create a new object for it. save keyword and trend
                keyword = Keyword(name=term[0])
                #trend = Trend(data=str(data.to_json()), keyword=keyword)
                trend = Trend(data=json.dumps(data2), keyword=keyword)
                keyword.save()
                trend.save()
            #print(data)
            combined_df = pd.concat([combined_df, data], axis=1, sort=False)

    except Exception as e:
        print()
        print("error interest_over_time: google is probably rate-limiting you: ", e)
        print()
        messages.warning(request, "You've already hit the API: interest_over_time.")

    # see django output in terminal for verification
    print(combined_df)
    print("Keyword.objects.all():", Keyword.objects.all())
    print("Keyword.objects.count():", Keyword.objects.count())
    print("Trend.objects.all():", Trend.objects.all())
    print("Trend.objects.count():", Trend.objects.count())
    if len(keyword_list) > 0:
        test_kw = keyword_list[0][0]
    print("Trend.objects.filter(keyword__name='{}')".format(test_kw),
          Trend.objects.filter(keyword__name=test_kw))


    all_trends = serializers.serialize("json", Trend.objects.all(), use_natural_foreign_keys=True)

    context = {
        "props": {
            "trends": json.loads(all_trends),
        },
    }

    return render(request, 'pages/home.html', context)


#################################################################
# Start Donny's Views                                             #
#################################################################

class TrendingListView(ListView):
    model = Trend
    template_name = ''
  
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class TrendingDetailView(DetailView):
    model = Trend
    template_name = 'pages/detail.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['trend-data'] = Trend.objects.all()
        return context
