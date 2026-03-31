import { useState, useEffect } from 'react';

const useCurrentHour = () => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return currentHour;
};

export default useCurrentHour;
