import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WeatherSkyIcon, { getSkyLabel } from './WeatherSkyIcon';

function CurrentWeather({ hourData }) {
  if (!hourData) {
    return null;
  }

  const temperature = hourData.variables.find((variable) => variable.nom === 'temp');
  const precipitation = hourData.variables.find((variable) => variable.nom === 'precip');
  const humidity = hourData.variables.find((variable) => variable.nom === 'humitat');
  const wind = hourData.variables.find((variable) => variable.nom === 'vent');
  const sky = hourData.variables.find((variable) => variable.nom === 'estatCel');

  return (
    <div className={'current-weather'}>
      <div className={'current-weather__main'}>
        {sky && <WeatherSkyIcon skyCode={sky.valor} size={'large'} />}
        <div>
          <div className={'current-weather__temp'}>
            {temperature ? `${Math.round(temperature.valor)}°` : '--°'}
          </div>
          {sky && (
            <div style={{ color: '#6b7280', textAlign: 'center' }}>
              {getSkyLabel(sky.valor)}
            </div>
          )}
        </div>
      </div>
      <div className={'current-weather__details'}>
        {precipitation && (
          <div className={'current-weather__detail'}>
            <WaterDropIcon sx={{ fontSize: '1rem', color: '#2196f3' }} />
            {precipitation.valor} mm
          </div>
        )}
        {humidity && (
          <div className={'current-weather__detail'}>
            <ThermostatIcon sx={{ fontSize: '1rem' }} />
            {humidity.valor}%
          </div>
        )}
        {wind && (
          <div className={'current-weather__detail'}>
            <AirIcon sx={{ fontSize: '1rem' }} />
            {wind.valor} km/h
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrentWeather;
