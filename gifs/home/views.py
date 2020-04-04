from django.shortcuts import render
from pytrends.request import TrendReq
import pandas as pd
import json, time, re
from gifs.home.models import Keyword, Trend

# Create your views here.
def home(request):

    regex1 = r"""
                [^a-zA-Z0-9 ] # [^] = match any character not in the set
                              # set = all characters a-z, A-Z, 0-9 and spaces
                """
    pattern1 = re.compile(regex1, re.VERBOSE)

    # Generating list of lists of currently trending keywords with punctuation stripped.
    # Punctuation breaks .interest_over_time() method in some cases at least.
    # .interest_over_time() expects a list for parameter kw_list
    pytrends = TrendReq(hl='en-US', tz=360)
    response = pytrends.trending_searches(pn='united_states')
    data = json.loads(response.to_json())["0"]
    keyword_list = [[pattern1.sub(" ", value)] for key, value in data.items()]
    #print("keyword_list:", keyword_list)

    # Get interest over time and store in single dataframe
    combined_df = pd.DataFrame()

    # search for each item separately
    for term in keyword_list: 
        pytrends.build_payload(kw_list=term, cat=0, timeframe='now 1-d', geo='US', gprop='')
        time.sleep(1)
        data = pytrends.interest_over_time()
        data = data.drop(labels=['isPartial'], axis='columns')
        #trend = Trend(data=str(data.to_json()))
        #keyword = Keyword(name=term[0], trends=trend)
        #trend.save()
        #keyword.save()
        #print(data)
        combined_df = pd.concat([combined_df, data], axis=1, sort=False)

    # see django output in terminal for verification. NOTE: due to sleep function, you will
    # have to wait for about 20 seconds to receive the reply
    print(combined_df)
    print(Keyword.objects.all())

    context = {
        "props": {
            "keyword": "Blockchain",
            "trendData": combined_df.to_json(),
        },
    }

    return render(request, 'pages/home.html', context)