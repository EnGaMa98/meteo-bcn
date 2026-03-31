import { createContext, useContext, useState } from 'react';
import useForecast from '../hooks/useForecast';
import useCurrentHour from '../hooks/useCurrentHour';
import CITIES from '../configuration/cities';

const ForecastContext = createContext(null);

function ForecastProvider({ children }) {
  const [cityCode, setCityCode] = useState(CITIES[0].code);
  const { forecast, loading, error } = useForecast(cityCode);
  const currentHour = useCurrentHour();

  const city = CITIES.find((city) => city.code === cityCode);

  const getCurrentHourData = () => {
    if (!forecast?.days?.length) return null;

    const todayStr = new Date().toISOString().split('T')[0];
    const today = forecast.days.find((day) => day.data === todayStr);
    if (!today) return forecast.days[0].hours[0];

    return today.hours.find((hour) => hour.hora === currentHour) || today.hours[0];
  };

  return (
    <ForecastContext.Provider value={{
      forecast,
      loading,
      error,
      currentHour,
      getCurrentHourData,
      city,
      cityCode,
      setCityCode,
    }}>
      {children}
    </ForecastContext.Provider>
  );
}

const useForecastContext = () => useContext(ForecastContext);

export { ForecastProvider, useForecastContext };
