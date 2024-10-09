# locale
Headless drupal ecommerce application
How to download this project
How to start this project
This project uses React and Drupal
React
Drupal
# Headless Drupal eCommerce Application

This project is a headless eCommerce application built using Drupal as the backend and React as the frontend. The application leverages the flexibility and power of Drupal to manage content and eCommerce functionality, while React provides a modern, responsive, and interactive user interface.

## Table of Contents

- [Headless Drupal eCommerce Application](#headless-drupal-ecommerce-application)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [How to Download This Project](#how-to-download-this-project)
  - [How to Start This Project](#how-to-start-this-project)
    - [Starting Drupal](#starting-drupal)
    - [Starting React](#starting-react)
  - [Project Structure](#project-structure)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Headless CMS architecture using Drupal
- Modern frontend interface built with React
- Seamless integration between Drupal and React
- Fully functional eCommerce capabilities

## Prerequisites

- Docker and Docker Compose installed on your machine

## How to Download This Project

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/headless-drupal-ecommerce.git
   ```

2. Navigate to the project directory:

   ```sh
   cd headless-drupal-ecommerce
   ```

## How to Start This Project

### Starting Project

1. Build and start the Docker containers:

   ```sh
   docker-compose up --build
   ```

1. Access Drupal at `http://localhost:8080`.

1. Access the React frontend at `http://localhost:3001`.

## Project Structure

```
headless-drupal-ecommerce/
├── locale-drupal/   # Drupal backend files
├── locale-react/    # React frontend files
├── docker-compose.yml  # Docker Compose configuration
├── README.md        # Project README
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **Drupal**: A powerful content management system
- **Docker**: A platform for developing, shipping, and running applications in containers
- **Docker Compose**: A tool for defining and running multi-container Docker applications

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to customize this README file to better fit your project's specific needs and details.

## API End Points
### Register
POST /api/register/
#### Request body
```
{ "email": "user@example.com", "password": "password123"}
```
#### Response
```
{"id":2,"email":"user1@example.com","is_business":false}
```
### Login
POST /api/login/
#### Request
```
{ "email": "user@example.com", "password": "password123" }
```
#### Response
### Logout
POST /api/logout/
### Response

## Test
1. User Registration Test (test_user_registration):
   - Tests user registration through the /api/register/ endpoint.
   - Verifies if a new user is successfully created.
1. Login Test (test_user_login):
   - Tests logging in with correct credentials through the /api/login/ endpoint.
   - Verifies that a token is returned.
1. Login with Invalid Credentials (test_user_login_invalid):
   - Tests logging in with incorrect credentials.
   - Verifies that the request fails with a 400 BAD REQUEST.
1. Logout Test (test_user_logout):
   - Tests logging out through the /api/logout/ endpoint after logging in.
   - Verifies that the logout is successful.
1. Get User Detail (test_get_user_detail):
   - Tests fetching a user's details after logging in.
   - Verifies that the correct user information is returned.
1. Update User Test (test_update_user):
   - Tests updating user information (like is_business) after logging in.
   - Verifies that the update is successfully reflected.
1. Delete User Test (test_delete_user):
   - Tests deleting a user's account after logging in.
   - Verifies that the user is successfully deleted.
   ## Running Test
   ```
   python manage.py test <app_name>.<test_casename>.<test_methodname>
   ```