from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from .models import User

class UserTests(APITestCase):

    def setUp(self):
        # Create a test user
        self.user = User.objects.create_user(
            email="testuser@example.com", password="testpassword", is_business=False
        )
        self.user_url = reverse('user-detail', kwargs={'pk': self.user.pk})
        self.login_url = reverse('login')
        self.logout_url = reverse('logout')
        self.register_url = reverse('register')

    def test_user_registration(self):
        """Test user registration endpoint"""
        data = {
            "email": "newuser@example.com",
            "password": "newpassword123",
            "is_business": True
        }
        response = self.client.post(self.register_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 2)
        self.assertEqual(User.objects.get(email="newuser@example.com").is_business, True)

    def test_user_login(self):
        """Test user login endpoint"""
        data = {
            "email": "testuser@example.com",
            "password": "testpassword"
        }
        response = self.client.post(self.login_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('token', response.data)

    def test_user_login_invalid(self):
        """Test user login with invalid credentials"""
        data = {
            "email": "wrongemail@example.com",
            "password": "wrongpassword"
        }
        response = self.client.post(self.login_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_user_logout(self):
        """Test user logout endpoint"""
        # First, log the user in to get a token
        data = {
            "email": "testuser@example.com",
            "password": "testpassword"
        }
        login_response = self.client.post(self.login_url, data, format='json')
        token = login_response.data['token']

        # Then, use the token to log out
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + token)
        logout_response = self.client.post(self.logout_url)
        self.assertEqual(logout_response.status_code, status.HTTP_200_OK)

    def test_get_user_detail(self):
        """Test retrieving a user's detail"""
        # Log the user in to get a token
        data = {
            "email": "testuser@example.com",
            "password": "testpassword"
        }
        login_response = self.client.post(self.login_url, data, format='json')
        token = login_response.data['token']

        # Use the token to access the user's details
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + token)
        response = self.client.get(self.user_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['email'], self.user.email)

    def test_update_user(self):
        """Test updating a user"""
        # Log the user in to get a token
        data = {
            "email": "testuser@example.com",
            "password": "testpassword"
        }
        login_response = self.client.post(self.login_url, data, format='json')
        token = login_response.data['token']

        # Use the token to update the user's info
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + token)
        update_data = {
            "is_business": True
        }
        response = self.client.put(self.user_url, update_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['is_business'], True)

    def test_delete_user(self):
        """Test deleting a user"""
        # Log the user in to get a token
        data = {
            "email": "testuser@example.com",
            "password": "testpassword"
        }
        login_response = self.client.post(self.login_url, data, format='json')
        token = login_response.data['token']

        # Use the token to delete the user's account
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + token)
        response = self.client.delete(self.user_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(User.objects.count(), 0)
