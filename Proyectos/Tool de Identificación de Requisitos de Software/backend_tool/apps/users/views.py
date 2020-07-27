from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import SetPasswordForm
from django.contrib.auth.models import update_last_login
from django.utils.decorators import method_decorator
from django.utils.translation import ugettext as _
from django.shortcuts import resolve_url, redirect
from django.shortcuts import render
from django.views.decorators.cache import never_cache
from django.views.decorators.debug import sensitive_post_parameters
from django.template.response import TemplateResponse
from django.urls import reverse
from django.conf import settings
from django.http import HttpResponseRedirect
from django.contrib.auth.views import *
from rest_framework import generics, status, filters
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import *

from django.utils.deprecation import MiddlewareMixin


class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        token, created = Token.objects.get_or_create(user=serializer.get_user())
        return Response({'token': token.key}, status=status.HTTP_200_OK)


class CreateUserAPIView(generics.CreateAPIView):
    serializer_class = CreateUserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key}, status=status.HTTP_200_OK)


class ListCreateUserAPIView(generics.ListCreateAPIView):
    serializer_class = RetrieveUserSerializer

    def get_queryset(self):
        return User.objects.filter(gender='HOMBRE')


class RUDUserAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RetrieveUserSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user


class ChangePasswordAPIView(generics.GenericAPIView):
    '''Cambiar contraseña para usuario logueado'''
    permission_classes = IsAuthenticated,
    serializer_class = ChangePasswordSerializer

    def put(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={"user": request.user})
        serializer.is_valid(raise_exception=True)

        serializer.save()
        return Response({"detail": "OK"}, status=status.HTTP_200_OK)


