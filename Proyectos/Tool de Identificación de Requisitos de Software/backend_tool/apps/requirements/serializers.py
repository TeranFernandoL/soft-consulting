from rest_framework import serializers
from .models import *

class RequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requirement
        fields = ('id', 'name', 'description', 'cost', 'creation_date', 'show')
        read_only_fields = ('name', 'description','cost')
        ##