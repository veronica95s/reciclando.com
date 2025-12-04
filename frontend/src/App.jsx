import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Ads from './pages/Ads';
import Recyclers from './pages/Recyclers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/anuncios' element={<Ads />} />
        <Route path='/recicladores' element={<Recyclers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
