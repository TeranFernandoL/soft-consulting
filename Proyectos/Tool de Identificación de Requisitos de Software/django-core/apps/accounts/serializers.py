from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _
from rest_framework import serializers


class RegisterSerializer(serializers.ModelSerializer):

    def validate(self, data):
        try:
            user = User.objects.filter(username=data.get('username'))
            if len(user) > 0:
                raise serializers.ValidationError(_("Username already exists"))
        except User.DoesNotExist:
            pass

        if not data.get('password'):
            raise serializers.ValidationError(_("Empty Password"))

        return data

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'password', 'is_active')
