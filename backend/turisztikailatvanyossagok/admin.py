from django.contrib import admin
from .models import Orszag, Varos, Latvanyossag
# Register your models here.

admin.site.register(Orszag)
admin.site.register(Varos)
admin.site.register(Latvanyossag)