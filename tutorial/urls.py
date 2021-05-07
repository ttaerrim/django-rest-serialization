from django.urls import include, path, re_path
from rest_framework import routers

from django.views.generic import TemplateView

from quickstart import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('s/', include('snippets.urls')),

    re_path('.*', TemplateView.as_view(template_name='index.html')),
]