from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class JifsConfig(AppConfig):
    name = "gifs.jifs"
    verbose_name = _("Jifs")

    def ready(self):
        try:
            import gifs.jifs.signals  # noqa F401
        except ImportError:
            pass
