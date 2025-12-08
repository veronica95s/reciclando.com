
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recyclers from "./pages/Recyclers/Recyclers"; 
import RecyclerProfile from "./pages/RecyclerProfile/RecyclerProfile";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recicladores" element={<Recyclers />} />  
        <Route path="/reciclador" element={<RecyclerProfile />} /> 
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;