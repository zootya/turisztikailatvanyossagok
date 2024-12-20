from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Orszag, Varos, Latvanyossag
from .forms import OrszagForm, VarosForm
from .serializers import LatvanyossagSelializer


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


def ujOrszag(request):
    if request.method == "GET":
        form = OrszagForm()
        ujorszagAdatok = Orszag.objects.all().order_by("orszagMegnevezes")
        context = {
            "ujorszag" : form, 
            "ujorszagAdatok" : ujorszagAdatok,
        }
        return render(request, "ujorszag.html", context)
    elif request.method == "POST":
        form = OrszagForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("ujorszag")
        else:
            #message = "Az adatok nem felelnek meg, nincs tárolás !"            
            message = form.errors
            return render(request, "data-error.html", {"error_message" : message })


def ujVaros(request):
    if request.method == "GET":
        form = VarosForm()
        ujvarosAdatok = Varos.objects.all().order_by("varosMegnevezes")
        context = {
            "ujvaros" : form, 
            "ujvarosAdatok" : ujvarosAdatok,
        }
        return render(request, "ujvaros.html", context)
    elif request.method == "POST":
        form = VarosForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("ujvaros")
        else:
            #message = "Az adatok nem felelnek meg, nincs tárolás !"
            message = form.errors
            return render(request, "data-error.html", {"error_message" : message })


@api_view(["GET", "POST"])
def latvany(request):
    if request.method == "GET":
        print("A GET látványba lépett")
        allLatvany = Latvanyossag.objects.all().order_by("latvanyossagMegnevezes")
        serialized = LatvanyossagSelializer(allLatvany, many = True )
        return Response(serialized.data)
    
    if request.method == "POST":
        serialized = LatvanyossagSelializer(data = request.data)
        if serialized.is_valid():
            serialized.save()
            return Response(serialized.data, status = status.HTTP_201_CREATED)
        return Response(serialized.errors, status = status.HTTP_400_BAD_REQUEST)
    