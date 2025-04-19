from django.shortcuts import render

def logo_page(request):
    return render(request, 'logo-page.html') 

def landing_page(request):
    return render(request, 'landing-page.html')  

def explain_page(request):
    return render(request, 'explain-page.html')  

def chatbot_page(request):
    return render(request, 'chatbot-page.html') 
