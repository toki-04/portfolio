# Generated by Django 4.2.7 on 2024-05-01 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('todo_text', models.CharField(max_length=250)),
                ('is_done', models.IntegerField(default=0)),
                ('date_created', models.DateTimeField(verbose_name='Date Created')),
            ],
        ),
    ]