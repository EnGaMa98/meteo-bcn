import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WeatherSkyIcon, { getSkyLabel } from './WeatherSkyIcon';

const formatDayName = (dateString) => {
  const date = new Date(dateString + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.getTime() === today.getTime()) return 'Avui';
  if (date.getTime() === tomorrow.getTime()) return 'Demà';

  return date.toLocaleDateString('ca-ES', { weekday: 'long' });
};

function DaysForecast({ days }) {
  const navigate = useNavigate();

  if (!days || days.length === 0) {
    return null;
  }

  return (
    <div className={'card forecast'}>
      <div className={'forecast__title'}>Previsió</div>
      <div className={'forecast__heading'}>Pròxims {days.length} dies</div>
      {days.map((day) => (
        <div
          key={day.data}
          className={'day-card day-card--clickable'}
          onClick={() => navigate(`/dia/${day.data}`)}
        >
          <div className={'day-card__left'}>
            <div className={'day-card__name'}>{formatDayName(day.data)}</div>
            <div className={'day-card__condition'}>{getSkyLabel(day.dominantSky)}</div>
          </div>
          <div className={'day-card__row'}>
            <WeatherSkyIcon skyCode={day.dominantSky} size={'medium'} />
            <div className={'day-card__temps'}>
              <span className={'day-card__max'}>{day.maxTemp}°</span>
              <span className={'day-card__separator'}>/</span>
              <span className={'day-card__min'}>{day.minTemp}°</span>
            </div>
            <ChevronRightIcon sx={{ color: '#9ca3af', fontSize: '1.2rem' }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DaysForecast;
