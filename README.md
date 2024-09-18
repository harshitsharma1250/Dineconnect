# Food Delivery Web Application

This project is a comprehensive **food delivery platform** designed with distinct modules for **restaurant management**, **backend services**, and **user interactions**. It provides restaurant administrators with tools to manage food items and orders, while allowing users to browse, order food, and make payments seamlessly.

## Project Structure

The application is organized into three primary directories:

- **admin**: For managing restaurant-related administrative tasks.
- **backend**: Handles server-side logic and data management.
- **frontend**: Manages user interface and client-side interactions.

## Features

### Admin Panel

- **Food Management**:
  - Add new food items with images, descriptions, prices, and categories.
  - View, update, and manage the status of customer orders.

### Frontend (User Interface)

- **User Authentication**:
  - Secure user registration and login using **JWT (JSON Web Tokens)**.
  
- **Food Display**:
  - Browse and view available food items with details.

- **Cart Functionality**:
  - Add items to the cart and adjust quantities as needed.
  - Review and modify items in the cart before checkout.

- **Payment Integration**:
  - Secure payment processing using **Stripe**.

### Backend (Server-Side)

- **Models**:
  - Define schema and relationships for `User`, `Food`, and `Order` entities.

- **Controllers**:
  - Implement business logic for food items, user management, and order processing.

- **Authorization Middleware**:
  - Manage user authentication and role-based authorization.

- **API Routes**:
  - Define RESTful endpoints for user operations, food management, and order handling.
