from django.urls import path
from .views import *

app_name = "projects"
urlpatterns = [
    path("", view=ListCreateProjectAPIView.as_view(), name="LISTAR Y CREAR PROYECTO"),
    path("<int:pk>", view=RUDProjectAPIView.as_view(), name="RUD PROYECTO"),
]