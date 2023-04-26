import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from './Components/Nav';
import './CSS/style.css';
import HomePage from './Components/HomePage';
import CreateAuthor from './Components/CreateAuthor';
import UpdateAuthor from './Components/UpdateAuthor';

function App() {

  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateAuthor />}  />
          <Route path="/:id" element={ <UpdateAuthor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
