from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("create-user/", views.Cadastrar, name="Cadastrar"),
    path("todos-pacientes/", views.TodosPacientes, name="Pacientes"),
    path("login/<str:pk>", views.Login, name="login")
]
