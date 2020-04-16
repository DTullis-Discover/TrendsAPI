from rest_framework import viewsets
from gifs.jifs.models import Jif 
from gifs.jifs.api.serializers import JifSerializer 

class JifViewSet(viewsets.ViewSet):
    serializer_class = JifSerializer
    queryset = Jif.objects.all()
