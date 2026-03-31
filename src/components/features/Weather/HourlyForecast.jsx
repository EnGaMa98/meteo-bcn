import { useRef, useEffect } from 'react';
import HourCard from './HourCard';

function HourlyForecast({ days, currentHour }) {
  const scrollRef = useRef(null);

  const today = new Date().toISOString().split('T')[0];
  const todayData = days?.find((day) => day.data === today) || days?.[0];

  useEffect(() => {
    if (!scrollRef.current || !todayData) return;

    const currentIndex = todayData.hours.findIndex((hour) => hour.hora === currentHour);
    if (currentIndex > 0) {
      const chipWidth = 70;
      scrollRef.current.scrollLeft = currentIndex * chipWidth - 20;
    }
  }, [todayData, currentHour]);

  if (!todayData) {
    return null;
  }

  return (
    <div className={'card hourly'}>
      <div className={'section-title section-title--with-link'}>
        <span>Previsió horària</span>
        <span className={'section-title__link'}>Properes 24h</span>
      </div>
      <div className={'hourly__list'} ref={scrollRef}>
        {todayData.hours.map((hour) => (
          <HourCard
            key={hour.hora}
            hour={hour}
            isCurrent={hour.hora === currentHour}
          />
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
