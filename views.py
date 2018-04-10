from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from . import APP_NAME, __version__
from cartoview.app_manager.views import StandardAppViews, AppsThumbnail
from geonode.maps.views import _PERMISSION_MSG_VIEW
import json
from django.http import HttpResponse
from geonode.maps.models import Map
from cartoview.app_manager.models import AppInstance, App
from cartoview.app_manager.views import _resolve_appinstance
from django.utils.decorators import method_decorator


class DashBoardThumbnail(AppsThumbnail):
    def map_thumbnail(self, mapId):
        if mapId is not None:
            map_obj = Map.objects.get(id=mapId)
            self.instance.thumbnail_url = map_obj.get_thumbnail_url()
            self.instance.save()

    def create_thumbnail(self):
        instance = self.instance
        parsed_config = json.loads(instance.config)
        for k, v in parsed_config.get("widgets", {}).items():
            if isinstance(v, dict):
                type = v.get('type', "")
                if type == "MapWidget":
                    id = v.get('config', {}).get("mapId", None)
                    self.map_thumbnail(id)
                    break


class Dashboard(StandardAppViews):
    def save(self, request, instance_id=None):
        res_json = dict(success=False)
        if request.META.get('CONTENT_TYPE', 'application/json') ==\
                "application/json":
            data = json.loads(request.body)
        else:
            data = request.POST

        map_id = data.get('map', None)
        title = data.get('title', "")
        config = data.get('config', None)
        abstract = data.get('abstract', "")
        if instance_id is None:
            instance_obj = AppInstance()
            instance_obj.app = App.objects.get(name=self.app_name)
            instance_obj.owner = request.user
        else:
            instance_obj = AppInstance.objects.get(pk=instance_id)

        instance_obj.title = title
        instance_obj.config = config
        instance_obj.abstract = abstract
        instance_obj.map_id = map_id
        instance_obj.save()
        thumbnail_obj = DashBoardThumbnail(instance_obj)
        thumbnail_obj.create_thumbnail()
        res_json.update(dict(success=True, id=instance_obj.id))
        return HttpResponse(json.dumps(res_json),
                            content_type="application/json")

    def __init__(self, app_name, version):
        super(Dashboard, self).__init__(app_name)
        self.new_template = self.edit_template = self.view_template =\
            "%s/dashboard.html" % self.app_name
        self.version = version

    @method_decorator(login_required)
    def new(self, request, template=None, context={}, *args, **kwargs):
        context = {
            "editable": True,
            "dbv": __version__
        }
        return super(Dashboard, self).new(request, template=None,
                                          context=context, *args, **kwargs)

    @method_decorator(login_required)
    def edit(self, request, instance_id,
             template=None, context={}, * args, **kwargs):
        context = {
            "editable": True,
            "dbv": __version__
        }
        return super(Dashboard, self).edit(request, instance_id=instance_id,
                                           template=None, context=context,
                                           * args, **kwargs)

    def view_app(self, request, instance_id, template=None, context={}):
        instance = _resolve_appinstance(
            request, instance_id, 'base.view_resourcebase',
            _PERMISSION_MSG_VIEW)
        context = {
            "instance": instance,
            "dbv": __version__
        }
        return render(request, self.view_template, context)


dashboard = Dashboard(APP_NAME, __version__)
