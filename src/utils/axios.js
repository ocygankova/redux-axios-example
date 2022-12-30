import axios from 'axios';

export const dataFetch = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

dataFetch.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 404) {
      window.location.href = '*';
    }
    return Promise.reject(error);
  }
);
