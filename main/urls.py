from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('apartamentos/', views.apartamentos),
    path('servicios/', views.servicios),
    path('eventos/', views.eventos),
    path('galeria/', views.galeria),
    path('ubicacion/', views.ubicacion),
    path('cabanacompleta/', views.cabanacompleta),
    path('contactanos/', views.contactanos),
    path('afrodita/', views.afrodita),
    path('eros/', views.eros),
    path('zeus/', views.zeus),
    path('poseidon/', views.poseidon),
    path('atenea/', views.atenea),
]
