from django.shortcuts import render
from django.utils import timezone
from django.views.generic.detail import DetailView
from django.views.generic.list import ListView
from gifs.jifs.models import Jif 
import requests
import json
import os

class JifDetailView(DetailView):

    model = Jif 

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context

def JifList(request):

    url = "https://api.giphy.com/v1/gifs/trending?api_key=" + os.environ['GIPHYKEY'] + "&limit=25&rating=G"
    payload = {}
    headers= {}
    response = requests.request("GET", url, headers=headers, data = payload)
    data = json.loads(response.text.encode('utf8'))

    for item in data["data"]:
        try:
            jif = Jif.objects.get(url=item["embed_url"])
        except Jif.DoesNotExist:
            jif = Jif(url=item["embed_url"], title=item["title"], trending_datetime=item["trending_datetime"])
            jif.save()

    jifs = Jif.objects.all()

    return render(request, 'jifs/jif_list.html', {"jifs" : jifs})
