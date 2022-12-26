import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Nav';

export default function App() {
  return (
    <div className='bg-whitish'>
      <Navbar/>
      <Home />
    </div>
  );
}
