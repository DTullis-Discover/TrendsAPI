from django.db import models

# Create your models here.
class Jif(models.Model):
    title = models.TextField(blank=True, default="")
    url = models.TextField(blank=True, default="")
    trending_datetime = models.TextField(blank=True, default="")

    def __str__(self):
        return str(self.title)
