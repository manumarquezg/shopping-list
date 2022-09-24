from django.db import models
from django.utils.translation import ugettext_lazy as _

from .behaviors import Timestampable


class Product(Timestampable, models.Model):
    name = models.CharField(
        _("name"),
        max_length=300,
        blank=False,
        null=False,
        help_text=_("Product name"),
    )
    quantity = models.PositiveIntegerField(
        _("quantity"),
        null=False,
        help_text=_("Quantity"),
    )
