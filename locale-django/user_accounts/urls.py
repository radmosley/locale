from django.urls import path
from .views import (
    UserCreateAPIView, 
    UserRetrieveUpdateDestroyAPIView, 
    LoginAPIView,
    LogoutAPIView,
)

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('register/', UserCreateAPIView.as_view(), name='register'),
    path('user/<int:pk>/', UserRetrieveUpdateDestroyAPIView.as_view(), name='user-detail'),
    path('login/', LoginAPIView.as_view(), name='login'),
    # path('api/login/', CustomTokenObtainPairView.as_view(), name='login'),
    path('logout/', LogoutAPIView.as_view(), name='logout'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]