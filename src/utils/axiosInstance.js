import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:7000/api/auth',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
});

export default axiosInstance;
