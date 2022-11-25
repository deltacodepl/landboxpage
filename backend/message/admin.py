from django.contrib import admin
from .models import Message

class MessageAdmin(admin.ModelAdmin):
  list_display = ('id', 'email', 'get_full_name')
  list_display_links = ('id', 'email', 'get_full_name')
  search_fields = ('email',)
  list_per_page = 20

admin.site.register(Message, MessageAdmin)