# import json
# from django.shortcuts import render, HttpResponse, redirect, HttpResponseRedirect
# from geonode.maps.views import _resolve_map, _PERMISSION_MSG_VIEW
#
# def index(request):
#     mapid = "7"
#     map_obj = _resolve_map(request, mapid, 'base.view_resourcebase', _PERMISSION_MSG_VIEW)
#     if 'access_token' in request.session:
#         access_token = request.session['access_token']
#     else:
#         access_token = None
#     context = dict(map_config=json.dumps(map_obj.viewer_json(request.user, access_token)),mapid=mapid)
#     return render(request, "cartoview_dashboard/index.html", context)

from django.shortcuts import render, render_to_response, HttpResponse, redirect, HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from . import APP_NAME
from cartoview_map_viewer import views as viewer_views


def view_map(request, instance_id):
    instance = viewer_views._resolve_appinstance(request, instance_id, 'base.view_resourcebase', viewer_views._PERMISSION_MSG_VIEW)
    context = {
        "instance": instance
    }
    return render(request, "%s/dashboard.html" % APP_NAME, context)

@login_required
def new(request):
    context = {
        "editMode": True
    }
    return viewer_views.new(request, app_name=APP_NAME, template="%s/dashboard.html" % APP_NAME, context=context)

@login_required
def edit(request, instance_id):
    context = {
        "editMode": True
    }
    return viewer_views.edit(request, instance_id, template="%s/dashboard.html" % APP_NAME, context=context)
