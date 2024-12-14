from django.db import models
from django.utils.timezone import now
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

class Orszag(models.Model):
    orszagMegnevezes = models.CharField(max_length=100)

    def __str__(self):
        return self.orszagMegnevezes
    class Meta:
        verbose_name_plural="Országok"

    
class Varos(models.Model):
    varosMegnevezese = models.CharField(max_length=100)
    orszag = models.ForeignKey("Orszag", on_delete=models.CASCADE)

    def __str__(self):
        return self.varosMegnevezese
    class Meta:
        verbose_name_plural="Városok"
    
class Latvanyossag(models.Model):
    latvanyossagMegnevezes = models.CharField(max_length=100)
    latvanyossagLeiras = models.TextField()
    ertekeles = models.IntegerField(
        default = 0 ,
        validators = [
            MinValueValidator(0),
            MaxValueValidator(5)
        ]
    )
    nyitvatartas = models.CharField(max_length=100)
    kepUrl = models.CharField(max_length=100)
    varos = models.ForeignKey("Varos", on_delete=models.CASCADE)

    def __str__(self):
        return self.latvanyossagMegnevezes
    class Meta:
        verbose_name_plural="Látványosságok"
