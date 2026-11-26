from django.urls import path

from .views import auth_status

urlpatterns = [
    path('status/', auth_status, name='auth-status'),
    # CST23030: register, login, logout, profile endpoints
]
