from rest_framework import serializers
from .models import Latvanyossag, Varos, Ertekeles

class LatvanyossagSelializerPost(serializers.ModelSerializer):
    class Meta:
        model = Latvanyossag
        fields = "__all__"

class LatvanyossagSelializerGet(serializers.ModelSerializer):
    class Meta:
        model = Latvanyossag
        depth = 2
        fields = "__all__"

class VarosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Varos
        depth = 1
        fields = "__all__"

class ErtekelesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ertekeles
        fields = "__all__"