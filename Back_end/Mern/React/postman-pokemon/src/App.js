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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon/:numberOrName" element={<PokemonApi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
