from rest_framework import viewsets
from gifs.jifs.models import Jif 
from gifs.jifs.api.serializers import JifSerializer 

class JifViewSet(viewsets.ModelViewSet):
    queryset = Jif.objects.all()
    serializer_class = JifSerializer
