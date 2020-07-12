from django.urls import path, re_path
from django.urls import reverse, reverse_lazy
from django.contrib.auth import views
from .views import *

app_name = "users"
urlpatterns = [
    path("login/", view=LoginAPIView.as_view(), name="login"),
    path("create/", view=CreateUserAPIView.as_view(), name="crear usuario"),
    path("listcreate/", view=ListCreateUserAPIView.as_view(), name="lista y crea"),
    path("", view=RUDUserAPIView.as_view(), name="obtener modificar y destruir usuario"),
]
