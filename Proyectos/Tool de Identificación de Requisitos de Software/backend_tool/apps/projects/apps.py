from django.apps import AppConfig


class ProjectsConfig(AppConfig):
    name = 'apps.projects'
    verbose_name ='Projects'

    def ready(self):
        try:
            from . import signals
        except ImportError:
            pass
