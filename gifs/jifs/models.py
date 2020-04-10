from django.db import models

# Create your models here.
class Jif(models.Model):
    image = models.ImageField(blank=True, default="")

    def __str__(self):
        return str(self.image)
