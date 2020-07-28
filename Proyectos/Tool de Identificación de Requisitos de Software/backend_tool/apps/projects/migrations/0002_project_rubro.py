# Generated by Django 2.2.3 on 2020-07-27 04:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='rubro',
            field=models.CharField(blank=True, choices=[('VENTAS_ONLINE', 'VENTAS_ONLINE'), ('BLOG', 'BLOG'), ('INFORMATIVA', 'INFORMATIVA'), ('CORPORATIVA', 'CORPORATIVA'), ('OTROS', 'OTROS')], max_length=30, null=True, verbose_name='rubro'),
        ),
    ]
