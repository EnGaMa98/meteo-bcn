import { createContext, useContext } from 'react';
import useForecast from '../hooks/useForecast';
import useCurrentHour from '../hooks/useCurrentHour';

const ForecastContext = createContext(null);

function ForecastProvider({ children }) {
  const { forecast, loading, error } = useForecast();
  const currentHour = useCurrentHour();

  const getCurrentHourData = () => {
    if (!forecast?.days?.length) return null;

    const todayStr = new Date().toISOString().split('T')[0];
    const today = forecast.days.find((day) => day.data === todayStr);
    if (!today) return forecast.days[0].hours[0];

    return today.hours.find((hour) => hour.hora === currentHour) || today.hours[0];
  };

  return (
    <ForecastContext.Provider value={{ forecast, loading, error, currentHour, getCurrentHourData }}>
      {children}
    </ForecastContext.Provider>
  );
}

const useForecastContext = () => useContext(ForecastContext);

export { ForecastProvider, useForecastContext };
