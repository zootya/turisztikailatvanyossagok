from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Orszag, Varos, Latvanyossag, Ertekeles, Iranyitoszam
from .forms import OrszagForm, VarosForm
from .serializers import LatvanyossagSelializerPost, LatvanyossagSelializerGet, VarosSerializer, ErtekelesSerializer, ErtekelesSerializerGet

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
        "github" : "https://github.com/zootya/turisztikailatvanyossagok",
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
def attrakcio(request):
    if request.method == "GET":
        allLatvany = Latvanyossag.objects.all().order_by("latvanyossagMegnevezes")
        serialized = LatvanyossagSelializerGet(allLatvany, many = True )
        return Response(serialized.data)
    
    if request.method == "POST":
        serialized = LatvanyossagSelializerPost(data = request.data)
        if serialized.is_valid():
            serialized.save()
            return Response(serialized.data, status = status.HTTP_201_CREATED)
        return Response(serialized.errors, status = status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def getvarosok(request):
    if request.method == "GET":
        allVaros = Varos.objects.all().order_by("varosMegnevezes")
        serialized = VarosSerializer(allVaros, many = True)
        return Response(serialized.data)


@api_view(["GET"])
def getegyattrakcio(request):
    if request.method == "GET":
        _id = request.GET.get("id")
        #print('Ezt kértem: {_id}')
        print('Ezt kértem: ')
        print(_id)
        
        egyattrakcio = Latvanyossag.objects.get(pk = _id)
        serialized = LatvanyossagSelializerGet(egyattrakcio)
        return Response(serialized.data)
    

@api_view(["POST"])
def ertekeles(request):
    if request.method == "POST":
        serialized = ErtekelesSerializer(data = request.data)
        if serialized.is_valid():
            serialized.save()
            return Response(serialized.data, status = status.HTTP_201_CREATED)
        return Response(serialized.errors, status = status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def getegyertekeles(request):
    if request.method == "GET":
        _id = request.GET.get("id")

        egyertekeles = Ertekeles.objects.all().filter(attrakcio_id = _id)
        serialized = ErtekelesSerializerGet(egyertekeles, many = True)
        return Response(serialized.data)
