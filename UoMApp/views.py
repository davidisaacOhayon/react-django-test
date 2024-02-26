from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.core.serializers import serialize
from .models import * 

# Create your views here.

def navigatorPage(request):
    data = {
        'message' : 'hello..'
    }
    return render(request, "index.html")


def returnStudent(request):
    student = Student.objects.first()
    courseID = student.courseID.courseID # Yeah, I know there's a repetition. But doing student.courseID returns the entire object.
    data = {
        'id' : student.studentID,
        'name': student.name,
        'courseID': courseID
    }

    
    return JsonResponse(data)

    

