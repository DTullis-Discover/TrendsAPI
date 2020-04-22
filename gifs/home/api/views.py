from rest_framework import viewsets
from gifs.home.models import Trend, Keyword
from gifs.home.api.serializers import TrendSerializer, KeywordSerializer

class TrendViewSet(viewsets.ModelViewSet):
    serializer_class = TrendSerializer
    queryset = Trend.objects.all()

class KeywordViewSet(viewsets.ModelViewSet):
    serializer_class = KeywordSerializer
    queryset = Keyword.objects.all()
