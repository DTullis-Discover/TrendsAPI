from django.urls import path
from gifs.jifs.views import JifDetailView, JifList

app_name = "jifs"

urlpatterns = [
    path("<int:pk>/", JifDetailView.as_view(), name="jif-detail"),
    path("", JifList, name="jif-list"),
]
