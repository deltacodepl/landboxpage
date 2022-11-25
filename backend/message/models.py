from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _


class Message(models.Model):
    first_name = models.CharField(_('first name'), max_length=30)
    last_name = models.CharField(_('last name'), max_length=30)
    email = models.EmailField(_('email_address'), max_length=200, unique=True)
    promopack = models.BooleanField(null=True)
    phone = models.CharField(max_length=50, blank=False)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)


    def get_full_name(self) -> str:
        return "{0} {1}".format(self.first_name, self.last_name).strip()

    def __str__(self) -> str:
        return self.email