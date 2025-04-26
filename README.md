# React Authentication App

This project is a React-based authentication application that allows users to sign up, log in, verify their email, reset their password, and manage their sessions. It utilizes JWT for authentication and includes protected routes to secure user access.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration (sign up)
- User login
- Email verification
- Password reset functionality
- Protected routes for secure access
- Responsive design

## Technologies Used

- React
- React Router
- Axios for API calls
- React Hook Form for form management
- JWT for authentication
- CSS for styling

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-authentication-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-authentication-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000).

## Usage

- **Sign Up**: Navigate to the `/signup` route to create a new account.
- **Login**: Navigate to the `/login` route to log in to your account.
- **Verify Email**: After signing up, you will receive a verification email. Use the verification code to verify your email at the `/verify-email` route.
- **Forgot Password**: If you forget your password, navigate to the `/forgot-password` route to request a password reset link.
- **Reset Password**: Use the link sent to your email to reset your password at the `/reset-password/:token` route.
- **Dashboard**: After logging in, you will be redirected to the `/dashboard` route, where you can see your user information and log out.

## API Endpoints

The application interacts with the following API endpoints:

- `POST /api/auth/signup`: Register a new user.
- `POST /api/auth/login`: Log in an existing user.
- `POST /api/auth/verify-email`: Verify the user's email with a verification code.
- `POST /api/auth/forgot-password`: Request a password reset link.
- `POST /api/auth/reset-password/:token`: Reset the user's password using a token.
- `GET /api/auth/check-auth`: Check the authentication status of the user.
- `POST /api/auth/logout`: Log out the current user.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
