from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    
    path('attrakcio', views.attrakcio),
    path('varoslist', views.getvarosok),
    path('egyattrakcio', views.getegyattrakcio),
    path('ertekeles', views.ertekeles),

    path('ujorszag/', views.ujOrszag, name="ujorszag"),
    path('ujvaros/', views.ujVaros, name="ujvaros"),

    path('feladat/', views.feladat_views, name="feladat_name"),
    path('data-error/', views.dataError, name="data-error"),
    path('kapcsolat/', views.kapcsolat, name="kapcsolat"),

]
