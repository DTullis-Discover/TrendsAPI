from django.urls import path
from home.views import home

app_name = "home"

urlpatterns = [
    path("", view=home, name="theHome"),
]
