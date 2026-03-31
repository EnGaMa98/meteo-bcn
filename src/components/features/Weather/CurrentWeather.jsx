import WeatherSkyIcon, { getSkyLabel } from './WeatherSkyIcon';

function CurrentWeather({ hourData, today }) {
  if (!hourData) {
    return null;
  }

  const now = new Date();
  const dateStr = now.toLocaleDateString('ca-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <div className={'card hero'}>
      <div className={'hero__date'}>{dateStr}</div>
      <div className={'hero__temp-row'}>
        <div className={'hero__temp'}>
          {Math.round(hourData.temp)}°
        </div>
        <div className={'hero__icon'}>
          <WeatherSkyIcon skyCode={hourData.sky} size={'large'} />
        </div>
      </div>
      <div className={'hero__condition'}>
        {getSkyLabel(hourData.sky)}
      </div>
    </div>
  );
}

export default CurrentWeather;
