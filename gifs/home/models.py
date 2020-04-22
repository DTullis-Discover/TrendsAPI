from django.db import models
import datetime

# Create your models here.
class KeywordManager(models.Manager):
    def get_by_natural_keys(self, name):
        return self.get(name=name)

class Keyword(models.Model):
    name = models.CharField(max_length=255, blank=True)

    objects = KeywordManager()

    def __str__(self):
        return self.name

    def natural_key(self):
        return (self.name)

class Trend(models.Model):
    date = models.DateField(default=datetime.datetime.utcnow)
    data = models.TextField(blank=True)
    keyword = models.ForeignKey(Keyword, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.date)
