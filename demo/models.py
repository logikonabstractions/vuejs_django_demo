from django.db import models
import datetime

# Create your models here.
class DemoModel(models.Model):
    nom = models.CharField(verbose_name="Nom", default="Franck", max_length=50)
    dob = models.DateField(verbose_name="DOB", default=datetime.date(1984, 11,26))

    def __str__(self):
        return f"{self.nom} - {self.dob}"