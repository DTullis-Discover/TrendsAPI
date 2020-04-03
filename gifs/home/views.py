from django.shortcuts import render
from pytrends.request import TrendReq
import json

# Create your views here.
def home(request):

    # Generating currently trending keywords
    pytrends = TrendReq(hl='en-US', tz=360)
    response = pytrends.trending_searches(pn='united_states')
    data = json.loads(response.to_json())["0"]
    kw_list = [value for key, value in data.items()]
    data = pytrends.get_historical_interest(kw_list, year_start=2018, month_start=1, day_start=1, hour_start=0, year_end=2018, month_end=2, day_end=1, hour_end=0, cat=0, geo='', gprop='', sleep=0)

    context = {
        "props": {
            "keyword": "Blockchain",
            "trendData": data,
        },
    }

    return render(request, 'pages/home.html', context)
