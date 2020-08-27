from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from apps.projects.models import Project, Actor


@receiver(post_save, sender=Project)
def create_cart_handler(sender, instance, created, **kwargs):
    if not created:
        return
    actor = Actor(project=instance, name="USUARIO PRINCIPAL")
    actor.save()
