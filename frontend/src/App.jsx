import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HowToRecycle from './pages/HowToRecycle';
import Login from './pages/Login';
import Ads from './pages/Ads';
import AdCreation from './pages/AdCreation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/anuncios' element={<Ads />} />
        <Route path='/recicladores' element={<Recyclers />} />
        <Route path='/login' element={<Login />} />
        <Route path='/como-reciclar' element={<HowToRecycle />} />
        <Route path='/anuncios/novo' element={<AdCreation />} />
      </Routes>
    </Router>
  );
}

export default App;
