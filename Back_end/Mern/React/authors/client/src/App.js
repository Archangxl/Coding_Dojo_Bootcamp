import {BrowserRouter, Form, Route, Routes} from 'react-router-dom';
import Nav from './Components/Nav';
import './CSS/style.css';
import HomePage from './Components/HomePage';
import FormControl from './Components/FormControl';

function App() {

  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<FormControl />}  />
          <Route path="/:id" element={<FormControl />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
