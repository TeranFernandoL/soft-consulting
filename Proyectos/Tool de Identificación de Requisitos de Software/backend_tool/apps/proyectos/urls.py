from django.urls import path, re_path
from django.urls import reverse, reverse_lazy
from django.contrib.auth import views
from .views import *

app_name = "proyectos"
urlpatterns = [
    path("", view=ListCreateProyectoAPIView.as_view(), name="LISTAR Y CREAR PROYECTO"),
    path("<int:pk>", view=RUDProyectoAPIView.as_view(), name="RUD PROYECTO"),
]
