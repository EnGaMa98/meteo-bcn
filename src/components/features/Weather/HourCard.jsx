import WeatherSkyIcon from './WeatherSkyIcon';

const HourCard = ({ hour, isCurrent }) => {
  const temperature = hour.variables.find((variable) => variable.nom === 'temp');
  const precipitation = hour.variables.find((variable) => variable.nom === 'precip');
  const sky = hour.variables.find((variable) => variable.nom === 'estatCel');

  const className = isCurrent ? 'hour-card hour-card--current' : 'hour-card';

  return (
    <div className={className}>
      <span className={'hour-card__time'}>
        {String(hour.hora).padStart(2, '0')}:00
      </span>
      {sky && <WeatherSkyIcon skyCode={sky.valor} size={'small'} />}
      <span className={'hour-card__temp'}>
        {temperature ? `${Math.round(temperature.valor)}°` : '--°'}
      </span>
      {precipitation && precipitation.valor > 0 && (
        <span className={'hour-card__rain'}>
          {precipitation.valor} mm
        </span>
      )}
    </div>
  );
};

export default HourCard;
