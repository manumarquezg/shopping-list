# Generated by Django 3.2 on 2022-09-24 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Product",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "name",
                    models.CharField(
                        help_text="Product name",
                        max_length=300,
                        verbose_name="name",
                    ),
                ),
                (
                    "quantity",
                    models.PositiveIntegerField(
                        help_text="Quantity", verbose_name="quantity"
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
