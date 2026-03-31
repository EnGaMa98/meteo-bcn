import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';

function WeatherDetails({ hourData }) {
  if (!hourData) {
    return null;
  }

  const humidityPercent = Math.round(hourData.humidity);
  const humidityColor = humidityPercent < 40 ? '#f59e0b' : humidityPercent < 70 ? '#22c55e' : '#3b82f6';

  return (
    <div className={'details'}>
      <div className={'card detail-card'}>
        <div className={'detail-card__header'}>
          <OpacityIcon className={'detail-card__icon'} />
          <span className={'detail-card__label'}>Humitat</span>
        </div>
        <div>
          <span className={'detail-card__value'}>{humidityPercent}</span>
          <span className={'detail-card__unit'}>%</span>
        </div>
        <div className={'detail-card__bar'}>
          <div
            className={'detail-card__bar-fill'}
            style={{ width: `${humidityPercent}%`, backgroundColor: humidityColor }}
          />
        </div>
      </div>
      <div className={'details__row'}>
        <div className={'card detail-card'}>
          <div className={'detail-card__header'}>
            <AirIcon className={'detail-card__icon'} />
            <span className={'detail-card__label'}>Vent</span>
          </div>
          <div>
            <span className={'detail-card__value'}>{Math.round(hourData.wind)}</span>
            <span className={'detail-card__unit'}> km/h</span>
          </div>
        </div>
        <div className={'card detail-card'}>
          <div className={'detail-card__header'}>
            <WaterDropIcon className={'detail-card__icon'} />
            <span className={'detail-card__label'}>Precipitació</span>
          </div>
          <div>
            <span className={'detail-card__value'}>{hourData.precip}</span>
            <span className={'detail-card__unit'}> mm</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
