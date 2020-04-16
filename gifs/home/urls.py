from django.urls import path
from home.views import home, TrendingListView

app_name = "home"

urlpatterns = [
    path("", view=home, name="theHome"),
    path('list', TrendingListView.as_view(), name="trending-list"),
]
