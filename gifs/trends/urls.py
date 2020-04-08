from django.urls import path
from trends.views import list

app_name = "trends"

urlpatterns = [
    #path("detail", view=detailView, name="theDetail"),
    path("list", view=list, name="theList")
]
