from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from .models import Orszag, Varos, Latvanyossag
from .forms import OrszagForm

# Create your views here.

def index(request):
    return render(request, "index.html")


def feladat_views(request):
    return render(request, "feladat.html")


def dataError(request):
    message = "Itt a bibi !"
    return render(request, "data-error.html", {"error_message" : message })


def kapcsolat(request):
    adatok = {
        "nev" : "Kardos Zoltán",
        "email" : "level kardos zoltannak kukac gmail pont kom",
    }
    return render(request, "kapcsolat.html", {"kapcsolatiAdatok" : adatok })