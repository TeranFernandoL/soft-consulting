from rest_framework import serializers
from .models import *
from apps.projects.serializers import *


class RequirementSerializer(serializers.ModelSerializer):
    projects = serializers.ListField(required=False)

    class Meta:
        model = Requirement
        fields = '__all__'


class RequirementViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requirement
        fields = '__all__'
        read_only_fields = ('id',)
