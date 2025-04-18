## User Management System

An application where admins can manage users profiles.

*This app uses [dummyjson](https://dummyjson.com/) REST API!*

1. API Endpoints 
User Authentication

POST /auth/login → Login with email & password (JWT-based auth).

POST /auth/register → Create a new user.

GET /auth/logout → Logout the user.

GET / → Get a list of users.

## User Management (Admin Only)

GET /users/:id/details → Get user details.

PUT /users/:id/edit → Update user details.

DELETE /users/:id/delete → Delete a user.

2. Tech Stack
Express.js → Backend framework.

Handlebars.js → Templating engine for admin UI.

jsonwebtoken (JWT) → Secure API authentication.

express-session → Session-based authentication for admin dashboard.


