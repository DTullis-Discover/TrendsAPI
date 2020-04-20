from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _

class HomeConfig(AppConfig):
    name = "gifs.home"
    verbose_name = _("Homes")

    def ready(self):
        try:
            import gifs.homes.signals  # noqa F401
        except ImportError:
            pass
