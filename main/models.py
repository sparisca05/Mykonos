from django.db import models

# Create your models here.

class Apto(models.Model):
    nombre = models.TextField(max_length=50)
    descripción = models.TextField(max_length=500)
    Imagen1 = models.ImageField(null=True, blank=True, upload_to='static/Imagenes/Aptos')
    Imagen2 = models.ImageField(null=True, blank=True, upload_to='static/Imagenes/Aptos')
    Imagen3 = models.ImageField(null=True, blank=True, upload_to='static/Imagenes/Aptos')
    Imagen4 = models.ImageField(null=True, blank=True, upload_to='static/Imagenes/Aptos')
    Imagen5 = models.ImageField(null=True, blank=True, upload_to='static/Imagenes/Aptos')
    Imagen6 = models.ImageField(null=True, blank=True, upload_to='static/Imagenes/Aptos')
    Imagen7 = models.ImageField(null=True, blank=True, upload_to='static/Imagenes/Aptos')
    Imagen8 = models.ImageField(null=True, blank=True, upload_to='static/Imagenes/Aptos')
    distribución = models.ImageField(null=True, blank=True, upload_to='static/Imagenes/Aptos')
    atributo1 = models.ImageField(null=True, blank=True, upload_to='static/Imagenes/Aptos')