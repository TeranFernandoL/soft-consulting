from django.urls import path
from .views import *

app_name="requirements"
urlpatterns = [
    path("", view=ListCreateRequirementAPIView.as_view(), name="LISTAR Y CREAR REQUISITO"),
    path("<int:pk>", view=RUDRequirementAPIView.as_view(), name="RUD REQUISITO"),

]