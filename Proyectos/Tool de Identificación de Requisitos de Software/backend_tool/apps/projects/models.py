# Create your models here.
from django.db import models
from apps.behaviors import TimesStampedModel
from django.conf import settings
from enum import Enum
from jsonfield import JSONField


# Create your models here.
class GeneralRequeriments(TimesStampedModel):
    name = models.CharField(verbose_name='nombre', max_length=200, blank=True, null=True)

    def __str__(self):
        return "{}".format(self.name)


class Project(TimesStampedModel):
    class type_rubro(Enum):
        VENTAS_ONLINE = "VENTAS_ONLINE"
        BLOG = "BLOG"
        INFORMATIVA = "INFORMATIVA"
        CORPORATIVA = "CORPORATIVA"
        OTROS = "OTROS"

    name = models.CharField('nombre', max_length=200, blank=True, null=True)
    description = models.TextField('descripcion', blank=True, null=True)
    date_end = models.DateTimeField('fecha de vencimiento', blank=True, null=True)
    confirmation = models.BooleanField('confimacion', default=False)
    users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='projects', through='UserProject', blank=True)
    rubro = models.CharField('rubro', max_length=30, blank=True, null=True,
                             choices=[(item.name, item.value) for item in type_rubro])
    general_requeriments = models.ManyToManyField(GeneralRequeriments, related_name='projects', blank=True)

    def __str__(self):
        return "{} - {}".format(self.id, self.name)

class UserProject(TimesStampedModel):
    project = models.ForeignKey(Project, related_name='user_projects', blank=True, null=True, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='user_projects', blank=True, null=True,
                             on_delete=models.CASCADE)
    confirmation = models.BooleanField('confirmation', default=False)

    def __str__(self):
        return "{} ".format(self.id)

    class Meta:
        unique_together = ('project', 'user')
