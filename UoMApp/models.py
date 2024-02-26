from django.db import models

# Create your models here.





class Course(models.Model):
    courseID = models.AutoField(primary_key=True)
    courseName = models.CharField(max_length=50)

    def __str__(self):
        return self.courseName
    


class StudyUnit(models.Model):
    unitName = models.CharField(max_length=50)
    unitID = models.AutoField(primary_key=True)
    studyUnits = models.ManyToManyField(Course)

    def __str__(self):
        return self.unitName

class Student(models.Model):
    studentID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    courseID = models.ForeignKey(Course, on_delete=models.CASCADE, null=True)
    

    def __str__(self):
        return self.name
    

