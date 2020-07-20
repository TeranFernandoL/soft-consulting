from rest_framework import serializers
from .models import *

class RequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requirement #Preguntar
        fields = ('id', 'nombre_req', 'priority_req', 'costo_req', 'creation_date_req', 'show')
        #read_only_fields = () #preguntar