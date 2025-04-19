from django.contrib import admin
from django.urls import path
from chatbot import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.logo_page, name='logo_page'),  # '/' 경로에서 'logo_page'로 설정
    path('logo/', views.logo_page, name='logo_page'),  # 'logo/' 경로도 'logo_page'로 연결
    path('landing/', views.landing_page, name='landing_page'),  # 'landing/' 경로는 'landing_page'로 연결
    path('explain/', views.explain_page, name='explain_page'),
    path('chatbot/', views.chatbot_page, name='chatbot_page'),
]
