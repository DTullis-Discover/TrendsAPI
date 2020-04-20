from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from gifs.users.api.views import UserViewSet
from gifs.home.api.views import TrendViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)
router.register("homes", TrendViewSet)


app_name = "api"
urlpatterns = router.urls
