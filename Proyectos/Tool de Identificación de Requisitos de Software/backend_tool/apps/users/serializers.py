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
from .models import *


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password', 'first_name', 'last_name', 'phone')
        write_only_fields = ('password',)
        read_only_fields = ('id',)

    def create(self, validated_data):
        user = User.objects.create(email=validated_data['email'], first_name=validated_data['first_name'],
                                   last_name=validated_data['last_name'], phone=validated_data['phone'])
        user.set_password(validated_data['password'])
        user.save()
        Token.objects.create(user=user)
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(error_messages={"blank": "Este campo es obligatorio"})
    password = serializers.CharField(error_messages={"blank": "Este campo es obligatorio"})

    def validate(self, attrs):
        self.user_cache = authenticate(email=attrs["email"], password=attrs["password"])
        if not self.user_cache:
            raise serializers.ValidationError("Invalid login")
        else:
            return attrs

    def get_user(self):
        return self.user_cache


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 'email', 'first_name', 'last_name', 'phone', 'gender', 'photo')
        read_only_fields = ('id', 'email')


class RetrieveUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 'email', 'first_name', 'last_name', 'phone', 'gender', 'photo')
        read_only_fields = ('id', 'email')


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(
        error_messages={"blank": "Este campo es obligatorio"})
    new_password = serializers.CharField(
        error_messages={"blank": "Este campo es obligatorio"})
    email = serializers.EmailField(
        error_messages={"blank": "Este campo es obligatorio"})

    def validate(self, attrs):
        user = self.context.get("user")
        if attrs.get("email") != user.email:
            raise serializers.ValidationError({"email": "Email mismatch"})
        if not user.check_password(attrs.get("old_password")):
            raise serializers.ValidationError({"password": "Password mismatch"})
        return attrs

    def save(self, **kwargs):
        user = self.context.get("user")
        user.set_password(self.validated_data.get("new_password"))
        user.save()


class PasswordRecoverySerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        self.cached_user = User.objects.filter(email=value).first()
        if not self.cached_user:
            raise serializers.ValidationError("The email is not registered")
        return value
