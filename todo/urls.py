from django.urls import path

from . import views

app_name = "todo"
urlpatterns = [
    path("", views.index, name="index"),
    path("remove/<int:todo_id>/", views.remove, name="remove"),
    path("update/<int:todo_id>/", views.update, name="update"),
]
