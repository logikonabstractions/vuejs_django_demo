from django.shortcuts import render
from django.views.generic import TemplateView, ListView
from .models import *
# Create your views here.

class DemoView(ListView):
    template_name   = 'demo/hellovue.html'
    model           = DemoModel

# class DemoView(TemplateView):
#     template_name   = 'demo/hellovue.html'
#
#     def get_context_data(self, **kwargs):
#         ctx = super().get_context_data(**kwargs)
#         ctx["foo"] = "bar"
#         return ctx