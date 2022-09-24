from rest_framework import routers, serializers, viewsets

from . import models


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = "__all__"


class ProductViewSet(viewsets.ModelViewSet):
    queryset = models.Product.objects.all()
    serializer_class = ProductSerializer


router = routers.DefaultRouter()
router.register(r"products", ProductViewSet)

urlpatterns = router.urls
