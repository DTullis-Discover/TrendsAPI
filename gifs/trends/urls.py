from django.urls import path
from home.views import detailView, listView

app_name = "trends"

urlpatterns = [
    path("detail", view=detailView, name="theDetail"),
    path("list", view=listView, name="theList"),
]
