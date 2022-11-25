
from message.models import Message
from django.db import transaction
from rest_framework import serializers

class MessageCreateSerializer(serializers.ModelSerializer):

    def validate(self, data, *args, **kwargs):
        return super().validate(data, *args, **kwargs)

    @transaction.atomic()
    def create(self, validated_data):
        return super().create(validated_data)

    # Form CreateAPIView
    class Meta:
        model = Message
        fields = ('email', 'id', 'first_name', 'last_name', 'phone', 'promopack')