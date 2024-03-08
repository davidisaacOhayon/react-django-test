from django.urls import path
from . import views


urlpatterns = [
    path('test/', views.navigatorPage),
    path('getStudent/', views.returnStudent),
    path('getStudentCourse/<str:courseID>', views.returnCourse),
    path('login/', views.loginProcess),
    path('CSRFTOKENREQ/', views.csrfRequest)
]