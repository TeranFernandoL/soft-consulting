from .base import *

DEBUG = True
SECRET_KEY = env('DJANGO_SECRET_KEY', default='z8j30%9q-jk9x!^j5q6#r+2bzc)#3kh#y-frt(5er+qpt-*en3')
ALLOWED_HOSTS = [
    "localhost",
    "0.0.0.0",
    "127.0.0.1",
    "97ced2419f31.ngrok.io",
]
# CACHES
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#caches
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
        'LOCATION': ''
    }
}

# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': "django.db.backends.postgresql_psycopg2",
        'NAME': "pruebadjangodb",
        'USER': "shinobu",
        'PASSWORD': "shinobu",
        'HOST': 'localhost',
        'PORT': '',
    }
}
DATABASES['default']['ATOMIC_REQUESTS'] = True


