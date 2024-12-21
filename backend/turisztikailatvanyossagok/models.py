from django.db import models
from django.utils.timezone import now
from django.core.validators import MinValueValidator, MaxValueValidator, MinLengthValidator, MaxLengthValidator

# Create your models here.

class Orszag(models.Model):
    orszagMegnevezes = models.CharField(
        max_length=100, 
        null=False, 
        blank=False,      
        unique=True,
        validators = [
                    MinLengthValidator(4, message = "Túl rövid országnévnek. (min:4)"),    # a legrövidebb 4 karakter pl Peru
                    MaxLengthValidator(58, message = "Túl hosszú országnévnek. (max: 85)") # Világ leghosszabb nevű országa 58 karakter
                                                                                           # 
        ]
    )

    def __str__(self):
        return self.orszagMegnevezes
    class Meta:
        verbose_name_plural="Országok"

    
class Varos(models.Model):
    varosMegnevezes = models.CharField(
        max_length = 100,
        null = False,
        blank = False,
        unique = True,
        validators = [
                    MinLengthValidator(3, message = "Túl rövid városnévnek. (min:4)"),    # a legrövidebb 3 karakter pl Ács
                    MaxLengthValidator(85, message = "Túl hosszú városnévnek. (max: 85)") # Világ leghosszabb nevű városa 85 karakter
                                                                                           # Taumatawhakatangihangakoauauotamateapokaiwhenuakitanatahu, Új-Zéland
        ]
        )
    orszag = models.ForeignKey("Orszag", on_delete = models.CASCADE)

    def __str__(self):
        return self.varosMegnevezes
    class Meta:
        verbose_name_plural="Városok"
    

class Latvanyossag(models.Model):
    latvanyossagMegnevezes = models.CharField(max_length=500)
    latvanyossagLeiras = models.TextField()
    ertekeles = models.IntegerField(
        default = 0 ,
        validators = [
            MinValueValidator(0),
            MaxValueValidator(5)
        ]
    )
    nyitvatartas = models.CharField(max_length=200)
    kepUrl = models.CharField(max_length=500)
    varos = models.ForeignKey("Varos", on_delete=models.CASCADE)

    def __str__(self):
        return self.latvanyossagMegnevezes
    class Meta:
        verbose_name_plural="Látványosságok"


class Iranyitoszam(models.Model):
    megnevezes = models.CharField(
        max_length = 500,
        null = False,
        blank = False,
    )
    irsz = models.IntegerField(
        null = False,
        blank = False,
        validators=[
            MinValueValidator(1000),
            MaxValueValidator(9999)
        ]
    )
        
    def __str__(self):
        return self.irsz
    class Meta:
        verbose_name_plural="Irányítószám"
