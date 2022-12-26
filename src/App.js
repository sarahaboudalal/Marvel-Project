import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Nav';
import Comics from './components/Comics';
import Events from './components/Events';

export default function App() {
  return (
    <div className="bg-gradient-to-l from-reddish via-orange to-whitish">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path='/events' element={ <Events/>} />
      </Routes>
    </div>
  );
}
