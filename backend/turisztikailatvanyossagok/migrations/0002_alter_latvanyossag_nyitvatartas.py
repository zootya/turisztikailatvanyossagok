# Generated by Django 5.1.4 on 2024-12-14 11:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('turisztikailatvanyossagok', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='latvanyossag',
            name='nyitvatartas',
            field=models.CharField(max_length=100),
        ),
    ]