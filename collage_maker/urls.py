from django.urls import path
from . import views

app_name = "collage_maker"

urlpatterns = [
    path("", views.index, name="index"),
]
