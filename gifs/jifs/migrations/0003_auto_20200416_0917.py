# Generated by Django 3.0.5 on 2020-04-16 09:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jifs', '0002_auto_20200416_0912'),
    ]

    operations = [
        migrations.RenameField(
            model_name='jif',
            old_name='image',
            new_name='url',
        ),
    ]
