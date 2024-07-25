from django.http import HttpResponse,JsonResponse
from django.shortcuts import render
from .models import Apto

# Create your views here.
def home(request):
    return render(request,"main/home.html")

def apartamentos(request):
    apartamentos = Apto.objects.all()
    return render(request, "main/apartamentos.html", {'aptos':apartamentos})

def apto(request):
    return render(request, "main/apto.html")

def servicios(request):
    return render(request, "main/servicios.html")

def eventos(request):
    return render(request, "main/eventos.html")

def galeria(request):
    return render(request, "main/galeria.html")

def ubicacion(request):
    return render(request, "main/ubicacion.html")

def cabanacompleta(request):
    return render(request, "main/cabanacompleta.html")

def contactanos(request):
    return render(request, "main/contactanos.html")