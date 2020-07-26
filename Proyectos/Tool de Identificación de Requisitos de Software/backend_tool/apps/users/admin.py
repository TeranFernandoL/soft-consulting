# Register your models here.
from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model

from .models import *


# Register your models here.
class MyUserAdmin(UserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'password', 'is_active', 'phone')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'photo', 'birthday')}),
        (_('Important dates'), {'fields': ('last_login',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )
    list_display = ('id', 'email', 'phone', 'first_name', 'last_name', 'is_active',)
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups',)
    search_fields = ('first_name', 'last_name', 'email',)
    ordering = ('email',)
    filter_horizontal = ('groups', 'user_permissions',)

admin.site.register(User, MyUserAdmin)