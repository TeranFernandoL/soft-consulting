from rest_framework import serializers
from .models import *


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = (
            'id', 'name', 'description', 'date_end', 'confirmation')
        read_only_fields = ('id','name')