from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from gifs.users.api.views import UserViewSet
from gifs.home.api.views import TrendViewSet
from gifs.jifs.api.views import JifViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register(r"users", UserViewSet, "users")
router.register(r"trends", TrendViewSet, "trends")
router.register(r"gifs", JifViewSet, "gifs")


app_name = "api"
urlpatterns = router.urls
