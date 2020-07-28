from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import generics, status, filters
from apps.projects.serializers import *
from apps.users.models import User


class ListCreateProyectoAPIView(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        project = Project.objects.filter(user_projects__user=self.request.user).order_by('id')
        return project

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = ProjectViewSerializer(page, many=True, context={'request': request})
            return self.get_paginated_response(serializer.data)

        serializer = ProjectViewSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        obj = self.perform_create(serializer)
        serializer = ProjectViewSerializer(obj, context={'request': request})
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        user = self.request.user
        return serializer.save(users=[user.id])


class RUDProyectoAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProjectViewSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        obj = get_object_or_404(Project, id=self.kwargs['pk'])
        return obj


class DeleteProjectAPIView(generics.GenericAPIView):
    permission_classes = IsAuthenticated,
    serializer_class = DeleteProjectSerializer

    def put(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={"user": request.user})
        serializer.is_valid(raise_exception=True)

        project = get_object_or_404(Project, id=serializer.data.get('project'))
        user = get_object_or_404(User, id=self.request.user.id)
        user_project = get_object_or_404(UserProject, user=user, project=project)
        if user_project:
            project.delete()
            project.save()
        return Response({"detail": "OK"}, status=status.HTTP_200_OK)


class InviteProjectAPIView(generics.GenericAPIView):
    permission_classes = IsAuthenticated,
    serializer_class = InviteProjectSerializer

    def put(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={"user": request.user})
        serializer.is_valid(raise_exception=True)

        project = get_object_or_404(Project, id=serializer.data.get('project'))
        user = get_object_or_404(User, email=serializer.data.get('email'))
        user_project = UserProject.objects.filter(user=user, project=project)
        if user and project and not user_project:
            user_project = UserProject.objects.create(project=project, user=user)
            user_project.save()
            return Response({"detail": "OK"}, status=status.HTTP_200_OK)
        return Response({"detail": "El usuario ya ha sido invitado"}, status=status.HTTP_200_OK)
