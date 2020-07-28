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
from apps.users.models import User


class UserProjectSerializer(serializers.ModelSerializer):
    user = RetrieveUserSerializer()

    class Meta:
        model = UserProject
        fields = '__all__'
        read_only_fields = ('id',)


class ProjectSerializer(serializers.ModelSerializer):
    users = serializers.ListField(required=False)

    class Meta:
        model = Project
        fields = '__all__'


class ProjectViewSerializer(serializers.ModelSerializer):
    users = RetrieveUserSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'
        read_only_fields = ('id',)


class DeleteProjectSerializer(serializers.Serializer):
    password = serializers.CharField(error_messages={"blank": "Este campo es obligatorio"})
    project = serializers.IntegerField(error_messages={"blank": "Este campo es obligatorio"})

    def validate(self, attrs):
        user = self.context.get("user")
        if not user.check_password(attrs.get("password")):
            raise serializers.ValidationError({"password": "Password Error"})
        return attrs


class InviteProjectSerializer(serializers.Serializer):
    email = serializers.EmailField(error_messages={"blank": "Este campo es obligatorio"})
    project = serializers.IntegerField(error_messages={"blank": "Este campo es obligatorio"})

    def validate(self, attrs):
        email = attrs.get("email")
        if not User.objects.filter(email=email):
            raise serializers.ValidationError({"email": "Email mismatch"})
        return attrs
