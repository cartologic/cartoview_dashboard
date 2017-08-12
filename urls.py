# from django.conf.urls import patterns, url, include
# from django.views.generic import TemplateView
# from . import views, APP_NAME
#
# urlpatterns = patterns('',
#     url(r'^$', views.index, name='%s.index' % APP_NAME),
# )
from django.conf.urls import patterns, url
import views
from . import APP_NAME

urlpatterns = views.dashboard.get_url_patterns()
