import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';

const SKY_ICONS = {
  1: { icon: WbSunnyIcon, color: '#f59e0b', label: 'Cel serè' },
  2: { icon: FilterDramaIcon, color: '#94a3b8', label: 'Cel poc ennuvolat' },
  3: { icon: FilterDramaIcon, color: '#64748b', label: 'Cel variable' },
  4: { icon: CloudIcon, color: '#64748b', label: 'Cel molt ennuvolat' },
  5: { icon: CloudIcon, color: '#475569', label: 'Cel cobert' },
  6: { icon: WaterDropIcon, color: '#3b82f6', label: 'Plugim' },
  7: { icon: ThunderstormIcon, color: '#6366f1', label: 'Tempesta' },
  8: { icon: AcUnitIcon, color: '#38bdf8', label: 'Neu' },
  9: { icon: CloudIcon, color: '#94a3b8', label: 'Boira' },
};

const DEFAULT_SKY = { icon: CloudIcon, color: '#94a3b8', label: 'Desconegut' };

const WeatherSkyIcon = ({ skyCode, size = 'medium' }) => {
  const sky = SKY_ICONS[skyCode] || DEFAULT_SKY;
  const IconComponent = sky.icon;
  const fontSize = size === 'large' ? '3rem' : size === 'medium' ? '1.5rem' : '1.2rem';

  return <IconComponent sx={{ fontSize, color: sky.color }} />;
};

const getSkyLabel = (skyCode) => {
  return (SKY_ICONS[skyCode] || DEFAULT_SKY).label;
};

export { getSkyLabel };
export default WeatherSkyIcon;
