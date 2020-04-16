from django.shortcuts import render
from django.utils import timezone
from django.views.generic.detail import DetailView
from django.views.generic.list import ListView
from gifs.jifs.models import Jif 
import requests
import json
import os

'''
This is the detail view. 
Right now it just shows a single gif. 
'''
class JifDetailView(DetailView):

    model = Jif 

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context

'''
This view shows all the Jifs in a grid. 
They can be clicked on to get to the detail view.
'''
def JifList(request):

    # Call API
    url = "https://api.giphy.com/v1/gifs/trending?api_key=" + os.environ['GIPHYKEY'] + "&limit=25&rating=G"
    payload = {}
    headers= {}
    response = requests.request("GET", url, headers=headers, data = payload)
    data = json.loads(response.text.encode('utf8'))

    # Loop through JSON blob and add NEW items to DB
    for item in data["data"]:
        jif, created = Jif.objects.get_or_create(url=item["embed_url"], title=item["title"], trending_datetime=item["trending_datetime"])
        if created == True:
            jif.save()

    # Get the objects to pass to page
    jifs = Jif.objects.all()

    # Pass all jif objects from DB to html template
    return render(request, 'jifs/jif_list.html', {"jifs" : jifs})
