from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class TrendsConfig(AppConfig):
    name = "gifs.trends"
    verbose_name = _("Trends")

    def ready(self):
        try:
            import gifs.users.signals  # noqa F401
        except ImportError:
            pass