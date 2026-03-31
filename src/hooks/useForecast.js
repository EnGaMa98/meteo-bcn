import { useState, useEffect } from 'react';
import apiClient from '../configuration/axiosConfiguration';

const getHourFromDate = (dateString) => {
  return new Date(dateString).getUTCHours();
};

const transformDay = (day) => {
  const variables = day.variables;
  const tempValues = variables.temp?.valors || [];
  const precipValues = variables.precipitacio?.valor || [];
  const skyValues = variables.estatCel?.valors || [];
  const windValues = variables.velVent?.valors || [];
  const humidityValues = variables.humitat?.valors || [];

  const hours = tempValues.map((tempEntry, index) => ({
    hora: getHourFromDate(tempEntry.data),
    temp: parseFloat(tempEntry.valor),
    precip: parseFloat(precipValues[index]?.valor || '0'),
    sky: skyValues[index]?.valor,
    wind: parseFloat(windValues[index]?.valor || '0'),
    humidity: parseFloat(humidityValues[index]?.valor || '0'),
  }));

  const temps = hours.map((hour) => hour.temp);

  return {
    data: day.data.replace('Z', ''),
    hours,
    maxTemp: Math.round(Math.max(...temps)),
    minTemp: Math.round(Math.min(...temps)),
    dominantSky: skyValues[12]?.valor || skyValues[0]?.valor,
  };
};

const useForecast = () => {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get('');
        const raw = response.data;
        const days = raw.dies.map(transformDay);
        setForecast({ codiMunicipi: raw.codiMunicipi, days });
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
