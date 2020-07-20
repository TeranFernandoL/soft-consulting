from django.contrib import admin
from apps.projects.models import Project, User_Project
# Register your models here.
admin.site.register(Project)
admin.site.register(User_Project)