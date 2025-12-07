import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HowToRecycle from './pages/HowToRecycle';
import Login from './pages/Login';
import Ads from './pages/Ads';
import Recyclers from './pages/Recyclers/Recyclers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/como-reciclar' element={<HowToRecycle />} />
        <Route path='/anuncios' element={<Ads />} />
        <Route path='/recicladores' element={<Recyclers />} />
      </Routes>
    </Router>
  );
}

export default App;
