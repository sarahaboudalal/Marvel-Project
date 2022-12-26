import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Home />
    </div>
  );
}
