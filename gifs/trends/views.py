# Create your views here.

from django.shortcuts import render
from pytrends.request import TrendReq
import pandas as pd


# Create your views here.
def list(request):
    pytrends = top_charts(2020, hl='en-US', tz=300, geo='GLOBAL')
    kw_list = ["Blockchain"]
    pytrends.build_payload(kw_list, cat=0, timeframe='today 5-y', geo='', gprop='')
    pdData = pd.DataFrame(pytrends)

    context = {
        "props": {
            "keyword": "Blockchain",
            "pytrends": pdData.to_json(),
        },
    }

    return render(request, 'pages/listTopCharts.html', context)
