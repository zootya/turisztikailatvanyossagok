from rest_framework import serializers
from .models import Latvanyossag

class LatvanyossagSelializer(serializers.ModelSerializer):
    class Meta:
        model = Latvanyossag
        fields = "__all__"