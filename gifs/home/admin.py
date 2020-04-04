from django.contrib import admin
from gifs.home.models import Keyword, Trend

# Register your models here.
admin.site.register([Trend, Keyword])
