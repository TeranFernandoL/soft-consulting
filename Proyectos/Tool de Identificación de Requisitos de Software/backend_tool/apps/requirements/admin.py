from django.contrib import admin
from apps.requirements.models import Requirement, Project_Requirement
# Register your models here.
admin.site.register(Requirement)
admin.site.register(Project_Requirement)