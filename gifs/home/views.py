from django.shortcuts import render
from pytrends.request import TrendReq
import pandas as pd


# Create your views here.
def home(request):
    pytrends = TrendReq(hl='en-US', tz=360)
    kw_list = ["Blockchain"] 
    pytrends.build_payload(kw_list, cat=0, timeframe='today 5-y', geo='', gprop='')
    trendData = pytrends.interest_over_time()
    pdData = pd.DataFrame(trendData)

    context = {
        "props": {
            "keyword": "Blockchain",
            "trendData": pdData.to_json(),
        },
    }

    return render(request, 'pages/home.html', context)
