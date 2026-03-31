import { useState, useEffect } from 'react';
import apiClient from '../configuration/axiosConfiguration';

const useForecast = () => {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get('');
        setForecast(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, []);

  return { forecast, loading, error };
};

export default useForecast;
