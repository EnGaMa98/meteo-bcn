import HourCard from './HourCard';

function HourlyForecast({ days, currentHour }) {
  if (!days || days.length === 0) {
    return null;
  }

  const today = new Date();

  const formatDayTitle = (dateString) => {
    const date = new Date(dateString + 'T00:00:00');
    const isToday = date.toDateString() === today.toDateString();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const isTomorrow = date.toDateString() === tomorrow.toDateString();

    if (isToday) return 'Avui';
    if (isTomorrow) return 'Demà';

    return date.toLocaleDateString('ca-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
  };

  return (
    <div className={'hourly-section'}>
      <div className={'hourly-section__title'}>Previsió horària</div>
      {days.map((day) => (
        <div key={day.data} className={'day-section'}>
          <div className={'day-section__title'}>
            {formatDayTitle(day.data)}
          </div>
          <div className={'hourly-list'}>
            {day.hpiores.map((hour) => (
              <HourCard
                key={`${day.data}-${hour.hora}`}
                hour={hour}
                isCurrent={day.data === today.toISOString().split('T')[0] && hour.hora === currentHour}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HourlyForecast;
