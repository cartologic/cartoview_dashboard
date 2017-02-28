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

urlpatterns = patterns('',
   url(r'^(?P<instance_id>\d+)/view/$', views.view_map, name='%s.view' % APP_NAME),
   url(r'^new/$', views.new, name='%s.new' % APP_NAME),
   url(r'^(?P<instance_id>\d+)/edit/$', views.edit, name='%s.edit' % APP_NAME),
)
