from django.urls import path
from apps.projects.views import *

app_name = "proyectos"
urlpatterns = [
    path("", view=ListCreateProyectoAPIView.as_view(), name="LISTAR Y CREAR PROYECTO"),
    path("<int:pk>", view=RUDProyectoAPIView.as_view(), name="RUD PROYECTO"),
    path("out", view=DeleteProjectAPIView.as_view(), name="BORRAR PROYECTO"),
    path("invite",view=InviteProjectAPIView.as_view(),name="INVITAR AMIGO"),
]
