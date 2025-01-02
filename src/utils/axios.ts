import axios from 'axios';
import { BASE_URL } from '../../config.ts';

// BASE URL -> http://localhost:8080

const axiosIntance = axios.create({
  baseURL: BASE_URL,
});

axiosIntance.interceptors.request.use(
  (response) => response,
  (error) => {
    return Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    );
  }
);

export default axiosIntance;
