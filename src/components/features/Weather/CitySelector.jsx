import { useForecastContext } from '../../../context/ForecastProvider';
import CITIES from '../../../configuration/cities';

const CitySelector = () => {
  const { cityCode, setCityCode } = useForecastContext();

  return (
    <div className={'city-selector'}>
      {CITIES.map((city) => (
        <button
          key={city.code}
          className={cityCode === city.code ? 'city-selector__btn city-selector__btn--active' : 'city-selector__btn'}
          onClick={() => setCityCode(city.code)}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default CitySelector;
