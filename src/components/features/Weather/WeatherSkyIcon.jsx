import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import NightsStayIcon from '@mui/icons-material/NightsStay';

const SKY_ICONS = {
  1: { icon: WbSunnyIcon, color: '#f59e0b', label: 'Cel serè' },
  2: { icon: FilterDramaIcon, color: '#94a3b8', label: 'Cel poc ennuvolat' },
  3: { icon: FilterDramaIcon, color: '#64748b', label: 'Cel variable' },
  4: { icon: CloudIcon, color: '#64748b', label: 'Cel molt ennuvolat' },
  5: { icon: CloudIcon, color: '#475569', label: 'Cel cobert' },
  6: { icon: WaterDropIcon, color: '#3b82f6', label: 'Pluja' },
  7: { icon: ThunderstormIcon, color: '#6366f1', label: 'Tempesta' },
  8: { icon: AcUnitIcon, color: '#38bdf8', label: 'Neu' },
  9: { icon: CloudIcon, color: '#94a3b8', label: 'Boira' },
  20: { icon: NightsStayIcon, color: '#64748b', label: 'Cel variable nocturn' },
  21: { icon: NightsStayIcon, color: '#475569', label: 'Cel molt ennuvolat nocturn' },
};

const DEFAULT_SKY = { icon: CloudIcon, color: '#94a3b8', label: 'Desconegut' };

const SIZES = {
  large: '3.5rem',
  medium: '2rem',
  small: '1.2rem',
};

const WeatherSkyIcon = ({ skyCode, size = 'medium', isCurrent }) => {
  const sky = SKY_ICONS[skyCode] || DEFAULT_SKY;
  const IconComponent = sky.icon;
  const fontSize = SIZES[size] || SIZES.medium;
  const color = isCurrent ? 'white' : sky.color;

  return <IconComponent sx={{ fontSize, color }} />;
};

const getSkyLabel = (skyCode) => {
  return (SKY_ICONS[skyCode] || DEFAULT_SKY).label;
};

export { getSkyLabel };
export default WeatherSkyIcon;
