from django.http import HttpResponse,JsonResponse
from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,"main/home.html")

def apartamentos(request):
    return render(request, "main/apartamentos.html")

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

def afrodita(request):
    return render(request, "main/afrodita.html")
def eros(request):
    return render(request, "main/eros.html")
def zeus(request):
    return render(request, "main/zeus.html")
def poseidon(request):
    return render(request, "main/poseidon.html")
def atenea(request):
    return render(request, "main/atenea.html")
