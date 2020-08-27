from django.urls import path
from apps.projects.views import *

app_name = "proyectos"
urlpatterns = [
    path("", view=ListCreateProyectoAPIView.as_view(), name="LISTAR Y CREAR PROYECTO"),
    path("<int:pk>", view=RUDProyectoAPIView.as_view(), name="RUD PROYECTO"),
    path("out", view=DeleteProjectAPIView.as_view(), name="BORRAR PROYECTO"),
    path("invite", view=InviteProjectAPIView.as_view(), name="INVITAR AMIGO"),
    path("generalrequirements", view=ListGeneralRequirementAPIView.as_view(), name="LISTAR REQUERIMIENTOS GENERALES"),
    path("<int:pk>/actor", view=ListCreateActorAPIView.as_view(), name="LISTAR Y CREAR ACTORES"),
    path("actor/<int:pk>", view=RUDActorAPIView.as_view(), name="RUD ACTORES"),
]
