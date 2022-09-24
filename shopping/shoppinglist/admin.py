from django.contrib import admin

from . import models


@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "name",
        "quantity",
        "created_at",
    ]
    date_hierarchy = "created_at"
    ordering = ["-created_at"]
    readonly_fields = ["id", "created_at"]
