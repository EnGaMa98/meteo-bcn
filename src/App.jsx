import { HashRouter, Routes, Route } from 'react-router-dom';
import { ForecastProvider } from './context/ForecastProvider';
import Home from './components/features/Weather/Home';
import DayDetail from './components/features/Weather/DayDetail';

function App() {
  return (
    <HashRouter>
      <ForecastProvider>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/dia/:date'} element={<DayDetail />} />
        </Routes>
      </ForecastProvider>
    </HashRouter>
  );
}

export default App;
