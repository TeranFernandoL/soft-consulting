from django.shortcuts import render
from rest_framework import generics,status, filters
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import get_object_or_404
from .serializers import *
from apps.users.models import User
# Create your views here.

class ListCreateRequirementAPIView(generics.ListCreateAPIView):
    serializer_class = RequirementSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        queryset = Requirement.objects.filter(project_requirements__project_id=self.kwargs['pk']).order_by('pk')
        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = RequirementViewSerializer(page, many=True, context={'request': request})
            return self.get_paginated_response(serializer.data)

        serializer = RequirementViewSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        obj = self.perform_create(serializer)
        print("hola ")
        serializer = RequirementViewSerializer(obj, context={'request': request})
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        obj = get_object_or_404(Project, id=self.kwargs['pk'])
        return serializer.save(projects=[obj.id])


class RUDRequirementAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RequirementViewSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        obj = get_object_or_404(Requirement, id=self.kwargs['pk'])
        return obj