from django.urls import path
from home.views import home, TrendingListView, TrendingDetailView, listKeywords, showTrend

app_name = "home"

urlpatterns = [
    path("", view=home, name="theHome"),
    path('list', listKeywords, name="trending-list"),
    path("list/<int:pk>/", showTrend, name="trending-detail"),
]
