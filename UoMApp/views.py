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
    courseID = student.courseID.courseID # Yeah, I know there's a repetition. But doing student.courseID returns the entire data object for some reason
    data = {
        'id' : student.studentID,
        'name': student.name,
        'courseID': courseID
    }

    
    return JsonResponse(data)


def returnCourse(request, courseID):
    course = Course.objects.get(pk = courseID)
    data = {
        'courseName' : course.courseName
    }

    return JsonResponse(data)
    

