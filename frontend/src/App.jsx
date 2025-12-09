import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import HowToRecycle from './pages/HowToRecycle/HowToRecycle';
import Ads from './pages/Ads/Ads';
import RecyclerInformations from './pages/RecyclerInformations/RecyclerInformations';
import Recyclers from './pages/Recyclers/Recyclers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/como-reciclar' element={<HowToRecycle />} />
        <Route path='/anuncios' element={<Ads />} />
        <Route path='/recycler-profile' element={<RecyclerInformations />} />
        <Route path='/recicladores' element={<Recyclers />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;