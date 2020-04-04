from django.shortcuts import render
from pytrends.request import TrendReq
import pandas as pd
import json, time

# Create your views here.
def home(request):

    # Generating list of currently trending keywords
    pytrends = TrendReq(hl='en-US', tz=360)
    response = pytrends.trending_searches(pn='united_states')
    data = json.loads(response.to_json())["0"]
    kw_list = [value for key, value in data.items()]

    # Break list into smaller lists of 5
    lists_of_five = [kw_list[i*5:(i+1)*5] for i in range((len(kw_list) + (5-1))//5)]
    #print("kw_list:", kw_list)
    #print("list_of_five:", lists_of_five)

    # Get interest over time and store in single dataframe
    combined_df = pd.DataFrame()

    for terms in lists_of_five:
        pytrends.build_payload(kw_list=terms, cat=0, timeframe='now 1-d', geo='US', gprop='')
        time.sleep(2)
        data = pytrends.interest_over_time()
        data= data.drop(labels=['isPartial'],axis='columns')
        #print(data)
        combined_df = pd.concat([combined_df, data], axis=1, sort=False)

    # see django output in terminal for verification
    print(combined_df)

    context = {
        "props": {
            "keyword": "Blockchain",
            "trendData": combined_df.to_json(),
        },
    }

    return render(request, 'pages/home.html', context)