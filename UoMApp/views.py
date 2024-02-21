from django.shortcuts import render
from django.http import JsonResponse, HttpResponse

# Create your views here.

def navigatorPage(request):
    data = {
        'message' : 'hello..'
    }
    return render(request, "index.html")
    

