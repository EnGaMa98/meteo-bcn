import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { useForecastContext } from '../../../context/ForecastProvider';
import CitySelector from './CitySelector';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import WeatherDetails from './WeatherDetails';
import DaysForecast from './DaysForecast';

function Home() {
  const { forecast, loading, error, currentHour, getCurrentHourData, city } = useForecastContext();

  if (loading) {
    return (
      <div className={'loading-container'}>
        <CircularProgress sx={{ color: '#2563eb' }} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={'error-container'}>
        <Alert severity={'error'} sx={{ maxWidth: 500 }}>
          Error carregant les dades: {error}
        </Alert>
        <Button
          variant={'contained'}
          sx={{ marginTop: 2 }}
          onClick={() => window.location.reload()}
        >
          Reintentar
        </Button>
      </div>
    );
  }

  const now = new Date();
  const dateFormatted = now.toLocaleDateString('ca-ES', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).toUpperCase();

  return (
    <div className={'app'}>
      <div className={'header'}>
        <div className={'header__location'}>
          <LocationOnIcon sx={{ fontSize: '1.1rem', color: '#2563eb' }} />
          {city.name}
        </div>
        <div className={'header__date'}>
          {dateFormatted}
        </div>
      </div>
      <CitySelector />
      <CurrentWeather hourData={getCurrentHourData()} />
      <HourlyForecast days={forecast?.days} currentHour={currentHour} />
      <WeatherDetails hourData={getCurrentHourData()} />
      <DaysForecast days={forecast?.days} />
    </div>
  );
}

export default Home;
