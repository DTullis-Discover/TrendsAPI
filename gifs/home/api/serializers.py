from rest_framework import serializers
from gifs.home.models import Trend, Keyword

class TrendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trend
        fields = "__all__"

class KeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword 
        fields = "__all__"
