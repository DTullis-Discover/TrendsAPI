from rest_framework import viewsets
from gifs.home.models import Trend, Keyword
from gifs.home.api.serializers import TrendSerializer 

class TrendViewSet(viewsets.ViewSet):
    serializer_class = TrendSerializer
    queryset = Trend.objects.all()
