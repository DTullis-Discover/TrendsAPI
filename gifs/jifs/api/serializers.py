from rest_framework import serializers

from gifs.jifs.models import Jif 

class JifSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jif 
        fields = ["url", "title", "trending_datetime"] 
