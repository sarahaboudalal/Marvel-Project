import './index.css';
import { Route, Routes } from 'react-router-dom';
import Heroes from './feautures/Heroes/Heroes';
import Navbar from './components/Nav';
import Comics from './feautures/Comics/Comics';
import Events from './feautures/Events/Events';
import Stories from './feautures/Stories/Stories';
import Series from './feautures/Series/Series';
import HeroPage from './feautures/Heroes/HeroPage';

export default function App() {
  return (
    <div className="bg-gradient-to-l from-reddish via-orange to-whitish">
      <Navbar />
      <Routes>
        <Route path="/" element={<Heroes />} />
        <Route path='/character/:id' element={<HeroPage/>} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/events" element={<Events />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </div>
  );
}
