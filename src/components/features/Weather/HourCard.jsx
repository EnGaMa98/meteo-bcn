import WeatherSkyIcon from './WeatherSkyIcon';

const HourCard = ({ hour, isCurrent }) => {
  const className = isCurrent ? 'hour-chip hour-chip--active' : 'hour-chip';

  return (
    <div className={className}>
      <span className={'hour-chip__time'}>
        {isCurrent ? 'Ara' : `${String(hour.hora).padStart(2, '0')}h`}
      </span>
      <WeatherSkyIcon skyCode={hour.sky} size={'small'} isCurrent={isCurrent} />
      <span className={'hour-chip__temp'}>
        {Math.round(hour.temp)}°
      </span>
      <span className={'hour-chip__rain'}>
        {hour.precip} mm
      </span>
    </div>
  );
};

export default HourCard;
