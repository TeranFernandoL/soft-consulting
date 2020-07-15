from django.db import models
from apps.behaviors import TimesStampedModel
# Create your models here.
class Proyecto(TimesStampedModel):
    name = models.CharField('nombre',max_length=200,blank=True,null=True)

    

