import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HowToRecycle from './pages/HowToRecycle/HowToRecycle';
import Login from './pages/Login/Login';
import Ads from './pages/Ads/Ads';
import AdCreation from './pages/AdCreation';
import Recyclers from './pages/Recyclers/Recyclers';
import AdUpdate from './pages/AdUpdate';

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
        <Route path='/anuncios/edicao/:id' element={<AdUpdate />} />'
      </Routes>
    </Router>
  );
}

export default App;
