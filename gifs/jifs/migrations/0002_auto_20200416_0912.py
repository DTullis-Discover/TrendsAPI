# Generated by Django 3.0.5 on 2020-04-16 09:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jifs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='jif',
            name='title',
            field=models.TextField(blank=True, default=''),
        ),
        migrations.AddField(
            model_name='jif',
            name='trending_datetime',
            field=models.TextField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='jif',
            name='image',
            field=models.TextField(blank=True, default=''),
        ),
    ]