from django import forms
from .models import Orszag, Varos, Latvanyossag

class OrszagForm(forms.ModelForm):
    class Meta:
        model = Orszag
        fields = '__all__'
        #fileds = ["orszagMegnevezes"]
        widgets = {
            "orszagMegnevezes" : forms.TextInput(attrs = {'class': 'form-control'}),
        }
        labels = {
            "orszagMegnevezes" : "Ország megnevezése"
        }


class VarosForm(forms.ModelForm):
    class Meta:
        model = Varos
        fields = '__all__'
        widgets = {
            "varosMegnevezes" : forms.TextInput(attrs = {'class' : 'form-control'}),
            "orszag" : forms.Select(attrs = {'class' : 'form-select'}),
        }
        labels = {
            "varosMegnevezes" : "Város megnevezése",
            "orszag" : "Országválasztó"
        }