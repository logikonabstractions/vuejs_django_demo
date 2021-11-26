from django.contrib import admin
from django.urls import path, include
from .views import *


app_name = "demo"
urlpatterns = [
    path('', DemoView.as_view(), name="demo")
]
