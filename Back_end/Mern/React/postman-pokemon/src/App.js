import React from 'react';
import "./CSS/style.css"
import 
{
  BrowserRouter,
  Routes,
  Route
}
from 'react-router-dom';

import PokemonApi from './Components/PokemonApi';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon/:numberOrName" element={<PokemonApi />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
