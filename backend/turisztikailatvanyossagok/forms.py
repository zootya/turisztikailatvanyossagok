from django import forms
from .models import Orszag, Varos, Latvanyossag

class OrszagForm(forms.ModelForm):
    class Meta:
        model = Orszag
        fields = '__all__'
        #fileds = ["orszagMegnevezes"]
        widgets = {
            "orszagMegnevezes" : forms.TextInput(attrs={'class': 'form-control'}),
        }
        labels = {
            "orszagMegnevezes" : "Ország megnevezése "
        }