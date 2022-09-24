from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . import models
from . import serializers

# Create your views here.
@api_view(['POST'])
def Cadastrar(request):
    serializer = serializers.PacienteSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['GET'])
def TodosPacientes(request):
    pacientes = models.Paciente.objects.all()

    serializer = serializers.PacienteSerializer(pacientes, many=True)


    return Response(serializer.data)

def home(request):
    return render(request, 'index.html')
