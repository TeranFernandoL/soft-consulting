from django.db import models
from apps.behaviors import TimesStampedModel
from django.conf import settings
from enum import Enum


# Create your models here.

class Project(TimesStampedModel):
    name = models.CharField(verbose_name='name', max_length=100, blank=True, null=False)
    description = models.CharField(verbose_name='description', max_length=300, blank=True, null=True)
    date_end = models.DateTimeField(verbose_name='date_end', blank=True, null=True)
    confirmation = models.BooleanField(verbose_name='confirmation', default=False)
    users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name= 'users', through= 'User_Project')

    def __str__(self):
        return "{} - {}".format(self.id, self.name)

class User_Project(TimesStampedModel):
    class Colaborator(Enum):
        ADMIN = "administrador"
        COLABORATOR = "colaborador"
        USER = "usuario"

    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name= 'user_projects', blank=True, null=True, on_delete= models.CASCADE)
    project = models.ForeignKey(Project, related_name= 'user_projects', blank=True, null=True, on_delete= models.CASCADE)
    confirmation = models.BooleanField(verbose_name='confirmation', default=False)
    colaborador = models.CharField('tipo_usuario', max_length=14, blank=True, null=True,
                                choices=[(item.name, item.value) for item in Colaborator])