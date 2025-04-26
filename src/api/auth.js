import axiosInstance from '../utils/axiosInstance';
import Cookies from 'js-cookie';

/**
 * Sign up a new user.
 * @param {Object} data - User data for signup.
 * @returns {Promise<Object>} - Response from the server.
 */
export const signupUser = async (data) => {
  try {
    const response = await axiosInstance.post('/signup', data);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Log in an existing user.
 * @param {Object} data - User credentials for login.
 * @returns {Promise<Object>} - Response from the server.
 */
export const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post('/login', data);
    if (response.data.success) {
      Cookies.set('token', response.data.token, { expires: 7 });
    }
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Verify the user's email with a verification code.
 * @param {string} code - Verification code.
 * @returns {Promise<Object>} - Response from the server.
 */
export const verifyEmail = async (code) => {
  try {
    const response = await axiosInstance.post('/verify-email', { code });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Request a password reset link for the user.
 * @param {string} email - User's email address.
 * @returns {Promise<Object>} - Response from the server.
 */
export const forgotPassword = async (email) => {
  try {
    const response = await axiosInstance.post('/forgot-password', { email });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Reset the user's password using a token.
 * @param {string} token - Password reset token.
 * @param {string} password - New password.
 * @returns {Promise<Object>} - Response from the server.
 */
export const resetPassword = async (token, password) => {
  try {
    const response = await axiosInstance.post(`/reset-password/${token}`, { password });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Check the authentication status of the user.
 * @returns {Promise<Object>} - Response from the server.
 */
export const checkAuth = async () => {
  try {
    const response = await axiosInstance.get('/check-auth');
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Log out the current user.
 * @returns {Promise<Object>} - Response from the server.
 */
export const logoutUser = async () => {
  try {
    const response = await axiosInstance.post('/logout');
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Handle errors from API calls.
 * @param {Object} error - Error object from the API call.
 * @returns {Object} - Structured error response.
 */
const handleError = (error) => {
  if (error.response) {
    return { success: false, message: error.response.data.message || 'An error occurred' };
  } else if (error.request) {
    return { success: false, message: 'No response from server. Please check your network connection.' };
  } else {
    return { success: false, message: error.message };
  }
};
  
