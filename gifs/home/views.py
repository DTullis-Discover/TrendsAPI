from django.shortcuts import render
from pytrends.request import TrendReq

# Create your views here.
def home(request):

#    pytrends = TrendReq(hl='en-US', tz=360)
#    kw_list = ["Blockchain"] 
#    pytrends.build_payload(kw_list, cat=0, timeframe='today 5-y', geo='', gprop='')
#    pytrends.interest_over_time()

    context = {
        "keyword": "test",
        "trendData": "example",
    }
    
    return render(request, 'pages/home.html', context)
