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
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import *

from django.utils.deprecation import MiddlewareMixin

class ListCreateProyectoAPIView(generics.ListCreateAPIView):
    serializer_class = ProyectoSerializer

    def get_queryset(self):
        return Proyecto.objects.all()

class RUDProyectoAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProyectoSerializer

    def get_object(self):
        obj = get_object_or_404(Proyecto, id=self.kwargs['pk'])
        return obj