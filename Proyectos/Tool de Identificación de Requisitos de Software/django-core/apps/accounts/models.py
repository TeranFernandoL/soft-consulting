from django.db import models, IntegrityError


class Unicorn(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
