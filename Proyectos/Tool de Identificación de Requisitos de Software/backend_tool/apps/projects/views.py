from django.shortcuts import render
from rest_framework import generics
from rest_framework.generics import get_object_or_404
from .serializers import *
# Create your views here.


class ListCreateProjectAPIView(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return Project.objects.all().order_by('id')



class RUDProjectAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProjectSerializer

    def get_object(self):
        obj = get_object_or_404(Project, id=self.kwargs['pk'])
        return obj