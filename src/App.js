import { Routes, Route } from 'react-router-dom';
import './App.css';
import SplashScreen from './Screens/SplashScreen';
import Home from './Screens/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
