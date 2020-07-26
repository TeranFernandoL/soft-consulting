from django.contrib.auth.models import User
from django.db import models, IntegrityError
from django.contrib.auth.models import PermissionsMixin, BaseUserManager, AbstractBaseUser

from apps.behaviors import TimesStampedModel

from enum import Enum


class UserManager(BaseUserManager):
    def _create_user(self, email, password, is_staff, is_superuser,
                     **extra_fields):
        user = self.model(email=email, is_active=True,
                          is_staff=is_staff, is_superuser=is_superuser,
                          **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, username=""):
        """
        Creates and saves a User with the given email and password.

        NOTE: Argument 'username' is needed for social-auth. It is not actually used.
        """
        if not email:
            raise ValueError('Users must have an email address.')

        # Validate email is unique in database
        if User.objects.filter(email=self.normalize_email(email).lower()).exists():
            raise ValueError('This email has already been registered.')

        user = self.model(
            email=self.normalize_email(email).lower(),
        )

        user.set_password(password)

        # Save and catch IntegrityError (due to email being unique)
        try:
            user.save(using=self._db)

        except IntegrityError:
            raise ValueError('This email has already been registered.')

        return user

    def create_superuser(self, email, password, **extra_fields):
        return self._create_user(email, password, True, True,
                                 **extra_fields)


class User(TimesStampedModel, AbstractBaseUser, PermissionsMixin):

    email = models.EmailField('correo electronico', unique=True)
    first_name = models.CharField('nombres', max_length=100)
    last_name = models.CharField('apellidos', max_length=100)
    photo = models.ImageField('foto', upload_to='user', blank=True, null=True)
    objects = UserManager()
    address = models.CharField('direccion', max_length=200, blank=True, null=True)
    enterprise_name = models.CharField('nombre de empresa', max_length=200, blank=True, null=True)
    phone = models.CharField('celular', max_length=30, blank=True, null=True)
    is_enabled = models.BooleanField(default=True, verbose_name='Habilitar Usuario')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'

    def get_full_name(self):
        return '{0} {1}'.format(self.first_name, self.last_name)

    def get_short_name(self):
        return self.first_name

    class Meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"
