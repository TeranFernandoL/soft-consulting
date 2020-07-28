from django.db import models
from apps.behaviors import TimesStampedModel
from django.conf import settings
from enum import Enum
from apps.projects.models import Project


# Create your models here.

class Requirement(TimesStampedModel):
    name = models.CharField(verbose_name='nombre', max_length=200, blank=True, null=True)
    description = models.TextField(verbose_name='descripcion', blank=True, null=True)
    priority = models.CharField(verbose_name='prioridad', max_length=10, blank=True, null=True)
    cost = models.FloatField(verbose_name='costo', blank=True, null=True)
    creation_date = models.DateTimeField(verbose_name='fecha de creacion', blank=True, null=True)
    show = models.BooleanField(verbose_name='mostrar', default=False)
    #projects = models.ManyToManyField(projects, related_name='projects', through='Project_Requirement')

    def __str__(self):
        return "{} - {}".format(self.id, self.name)

class Project_Requirement(TimesStampedModel):
    requirement = models.ForeignKey(Requirement, related_name= 'Clave_foranea_requerimiento', blank=True, null=True, on_delete= models.CASCADE)
    project = models.ForeignKey(Project,related_name='Clave_foranea_proyectos', blank=True, null=True, on_delete= models.CASCADE)
    confirmation = models.BooleanField(verbose_name='confirmacion', default=False)