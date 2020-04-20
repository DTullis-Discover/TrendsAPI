from django.urls import path
from home.views import home, TrendingListView,TrendingDetailView

app_name = "home"

urlpatterns = [
    path("", view=home, name="theHome"),
    path('list', TrendingListView.as_view(), name="trending-list"),
    path("list/<int:pk>/", TrendingDetailView.as_view(), name="trending-detail"),
]
