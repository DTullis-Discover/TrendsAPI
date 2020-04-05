from django.db import models
import datetime

# Create your models here.
class Keyword(models.Model):
    name = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name

class Trend(models.Model):
    date = models.DateField(default=datetime.datetime.utcnow)
    data = models.TextField(blank=True)
    keyword = models.ForeignKey(Keyword, default="", on_delete=models.CASCADE)

    def __str__(self):
        return str(self.date)
