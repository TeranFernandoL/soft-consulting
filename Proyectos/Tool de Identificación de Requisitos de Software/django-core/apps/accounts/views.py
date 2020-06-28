import json

from braces.views import CsrfExemptMixin
from django.db import transaction
from oauth2_provider.settings import oauth2_settings
from oauth2_provider.views.mixins import OAuthLibMixin
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import *


class UserRegister(CsrfExemptMixin, OAuthLibMixin, APIView):
    permission_classes = (permissions.AllowAny,)

    server_class = oauth2_settings.OAUTH2_SERVER_CLASS
    validator_class = oauth2_settings.OAUTH2_VALIDATOR_CLASS
    oauthlib_backend_class = oauth2_settings.OAUTH2_BACKEND_CLASS

    def post(self, request):
        if request.auth is None:
            data = request.data
            data = data.dict()
            serializer = RegisterSerializer(data=data)
            if serializer.is_valid():
                user = serializer.save()
                url, headers, body, token_status = self.create_token_response(request)
                print(self.create_token_response(request))
                if token_status != 200:
                    print("error")
                else:
                    return Response(json.loads(body), status=token_status)
                try:
                    with transaction.atomic():
                        user = serializer.save()

                        url, headers, body, token_status = self.create_token_response(request)
                        if token_status != 200:
                            raise Exception(json.loads(body).get("error_description", ""))

                        return Response(json.loads(body), status=token_status)
                except Exception as e:
                    return Response(data={"error": "meesage"}, status=status.HTTP_400_BAD_REQUEST)
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_403_FORBIDDEN)
