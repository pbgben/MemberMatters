# Generated by Django 3.0.4 on 2020-03-26 14:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("profile", "0022_auto_20200326_2011"),
    ]

    operations = [
        migrations.RemoveField(model_name="profile", name="last_invoice",),
        migrations.RemoveField(model_name="profile", name="starving_override",),
    ]