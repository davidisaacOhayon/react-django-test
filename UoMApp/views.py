from django.shortcuts import render
from django.db.models import Prefetch
from django.http import JsonResponse, HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from django.core.serializers import serialize
from django.middleware.csrf import get_token
from .models import * 
import json

# Create your views here.


# try:
#     student = Student.objects.first()
#     user = User.object.first()

#     student.user = user

#     student.save()

# except Student.DoesNotExist:
#     print("We got an error")






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


def csrfRequest(request):
    csrf_token = get_token(request)
    print(csrf_token)
    return JsonResponse({'csrfToken' : csrf_token})

def loginProcess(request):
    if request.method == "POST":
        try:
            loginData = request.POST # Requiest.body is the argument passed.
            loginPass = loginData.get('password')
            loginUser = loginData.get('username')
            
            user = User.objects.get(username=loginUser) # Query for respective user
            if check_password(loginPass, user.password): # Determine if password is corrects
                JSONData = serialize('json', user) # Parse Object information into JSON
                return JsonResponse(JSONData) # Send a JSON Response 
        except User.DoesNotExist:
            return JsonResponse({'Error': 'Invalid Json Data'}, status=400)
        

 
    
def returnCourse(request, courseID):
    course =    Course.objects.get(pk=courseID)
    studyUnits = course.studyUnits.all()
    data = {
           'courseName' : course.courseName,
           'courseCode': course.courseCode,
    }
    return JsonResponse(data, safe=False)


    

