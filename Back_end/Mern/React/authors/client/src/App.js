import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from './Components/Nav';
import './CSS/style.css';
import HomePage from './Components/HomePage';

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
