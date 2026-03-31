import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { useForecastContext } from '../../../context/ForecastProvider';
import HourCard from './HourCard';
import WeatherSkyIcon, { getSkyLabel } from './WeatherSkyIcon';

const formatDayTitle = (dateString) => {
  const date = new Date(dateString + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.getTime() === today.getTime()) return 'Avui';
  if (date.getTime() === tomorrow.getTime()) return 'Demà';

  return date.toLocaleDateString('ca-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
};

function DayDetail() {
  const { date } = useParams();
  const navigate = useNavigate();
  const { forecast, currentHour, city } = useForecastContext();

  const day = forecast?.days?.find((day) => day.data === date);

  if (!day) {
    return (
      <div className={'app'}>
        <div className={'header'}>
          <IconButton onClick={() => navigate('/')} sx={{ color: '#2563eb' }}>
            <ArrowBackIcon />
          </IconButton>
        </div>
        <div className={'card hero'}>
          <div className={'hero__condition'}>No hi ha dades per aquest dia</div>
        </div>
      </div>
    );
  }

  const todayStr = new Date().toISOString().split('T')[0];
  const isToday = day.data === todayStr;

  return (
    <div className={'app'}>
      <div className={'header'}>
        <IconButton onClick={() => navigate('/')} sx={{ color: '#2563eb' }}>
          <ArrowBackIcon />
        </IconButton>
        <div className={'header__date'}>
          {formatDayTitle(day.data)}
        </div>
      </div>

      <div className={'card hero'}>
        <div className={'hero__temp-row'}>
          <div>
            <div className={'hero__temp'}>{day.maxTemp}°</div>
            <div className={'hero__condition'}>
              Mín {day.minTemp}° · {getSkyLabel(day.dominantSky)}
            </div>
          </div>
          <div className={'hero__icon'}>
            <WeatherSkyIcon skyCode={day.dominantSky} size={'large'} />
          </div>
        </div>
      </div>

      <div className={'card hourly'}>
        <div className={'section-title'}>Previsió horària</div>
        <div className={'hourly__list'}>
          {day.hours.map((hour) => (
            <HourCard
              key={hour.hora}
              hour={hour}
              isCurrent={isToday && hour.hora === currentHour}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DayDetail;
