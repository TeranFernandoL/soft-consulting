from django.urls import path, re_path
from django.urls import reverse, reverse_lazy
from django.contrib.auth import views
from .views import *

app_name = "users"
urlpatterns = [
    path("login/", view=login, name="login"),
    path("create/", view=createuser, name="crear usuario"),
    path("", view=ruduser, name="obtener modificar y destruir usuario"),
]
