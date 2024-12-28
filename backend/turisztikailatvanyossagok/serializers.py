from rest_framework import serializers
from .models import Latvanyossag, Varos, Ertekeles


class LatvanyossagSelializerPost(serializers.ModelSerializer):
    class Meta:
        model = Latvanyossag
        #fields = ['latvanyossagMegnevezes', 'latvanyossagLeiras', 'nyitvatartas', 'kepUrl', 'varos']
        fields = "__all__"


class LatvanyossagSelializerGet(serializers.ModelSerializer):
    class Meta:
        model = Latvanyossag
        depth = 2
        #fields = ['latvanyossagMegnevezes', 'latvanyossagLeiras', 'nyitvatartas', 'kepUrl', 'varos']
        fields = "__all__"


class VarosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Varos
        depth = 1
        #fiels = ['varosId', 'varosMegnevezes', 'irszagId']
        fields = "__all__"


class ErtekelesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ertekeles
        #fields = ['ertekeles', 'velemeny', 'pozitiv', 'negativ', 'ertekelo', 'iranyitoszam', 'attrakcio']
        fields = "__all__"


class ErtekelesSerializerGet(serializers.ModelSerializer):
    class Meta:
        model = Ertekeles
        depth = 2
        #fields = ['ertekeles', 'velemeny', 'pozitiv', 'negativ', 'ertekelo', 'iranyitoszam', 'attrakcio']
        fields = "__all__"