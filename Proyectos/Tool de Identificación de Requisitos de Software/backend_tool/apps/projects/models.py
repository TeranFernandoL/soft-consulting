from django.db import models
from apps.behaviors import TimesStampedModel


# Create your models here.

class Project(TimesStampedModel):
    name = models.CharField(verbose_name='name', max_length=100, blank=True, null=False)
    description = models.CharField(verbose_name='description', max_length=300, blank=True, null=True)
    date_end = models.DateTimeField(verbose_name='date_end', blank=True, null=True)
    confirmation = models.BooleanField(verbose_name='confrimation')

