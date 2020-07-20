from django.shortcuts import render
from rest_framework import generics
from rest_framework.generics import get_object_or_404
from .serializers import *
# Create your views here.

class ListCreateRequirementAPIView(generics.ListCreateAPIView):
    serializer_class = RequirementSerializer

    def get_queryset(self):
        return Requirement.objects.all().order_by('id')



class RUDRequirementAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RequirementSerializer

    def get_object(self):
        obj = get_object_or_404(Requirement, id=self.kwargs['pk'])
        return obj