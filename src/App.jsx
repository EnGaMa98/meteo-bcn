import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import useForecast from './hooks/useForecast';
import useCurrentHour from './hooks/useCurrentHour';
import CurrentWeather from './components/features/Weather/CurrentWeather';
import HourlyForecast from './components/features/Weather/HourlyForecast';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  const { forecast, loading, error } = useForecast();
  const currentHour = useCurrentHour();

  const getCurrentHourData = () => {
    if (!forecast?.dies) return null;

    const todayStr = new Date().toISOString().split('T')[0];
    const today = forecast.dies.find((day) => day.data === todayStr);
    if (!today) return null;

    return today.hpiores.find((hour) => hour.hora === currentHour) || today.hpiores[0];
  };

  if (loading) {
    return (
      <div className={'loading-container'}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className={'error-container'}>
        <Alert severity={'error'} sx={{ maxWidth: 500, margin: '0 auto' }}>
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={'app-container'}>
        <header className={'app-header'}>
          <div className={'app-header__title'}>Meteo Barcelona</div>
          <div className={'app-header__subtitle'}>
            {forecast?.nom || 'Barcelona'}
          </div>
        </header>
        <CurrentWeather hourData={getCurrentHourData()} />
        <HourlyForecast days={forecast?.dies} currentHour={currentHour} />
      </div>
    </ThemeProvider>
  );
}

export default App;
