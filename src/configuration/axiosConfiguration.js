import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_API_TOKEN;
  if (token) {
    config.headers['x-api-key'] = token;
  }
  return config;
});

export default apiClient;
