from django.urls import path
from . import views

app_name = "qr"

urlpatterns = [
    path("", views.index, name="index"),
    path("generate/", views.generate_qr_code, name="generate"),
]
