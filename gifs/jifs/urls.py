from django.urls import path
from gifs.jifs.views import JifDetailView, JifListView

app_name = "jifs"

urlpatterns = [
    path("<image:image>/", JifDetailView.as_view(), name="jif-detail"),
    path("list", JifListView.as_view(), name="jif-list"),
]
