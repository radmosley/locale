from rest_framework import serializers
from .models import User, StoreFront
from django.contrib.auth import authenticate

#User Accounts
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'is_business')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data["email"],
            password=validated_data["password"],
            is_business=validated_data.get("is_business", False)
        )
        return user
    
    def update(self, instance, validated_data):
        if 'password' in validated_data:
            instance.set_password(validated_data["password"])
        instance.is_business = validated_data.get("is_business", instance.is_business)
        instance.save()
        return instance
    
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(email=data["email"], password=data["password"])
        if user and user.is_active:
            return user
        raise serializers.ValidationError("invalid login credentials")

#Store Fronts
class StoreFrontSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoreFront
        fields = '__all__'
