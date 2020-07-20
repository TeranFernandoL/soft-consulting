from django.contrib.auth import authenticate, login
from django.contrib.auth.tokens import default_token_generator
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail.message import EmailMessage
from django.conf import settings
from requests.exceptions import HTTPError
from rest_framework.authtoken.models import Token
from rest_framework.relations import RelatedField
from rest_framework import serializers
from rest_framework.serializers import PrimaryKeyRelatedField
from django.template import loader
from apps.users.serializers import RetrieveUserSerializer
from .models import *


class UserProjectSerializer(serializers.ModelSerializer):
    user = RetrieveUserSerializer()

    class Meta:
        model = UserProject
        fields = '__all__'
        read_only_fields = ('id',)


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
        read_only_fields = ('id',)


class ProjectViewSerializer(serializers.ModelSerializer):
    users = RetrieveUserSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'
        read_only_fields = ('id',)
