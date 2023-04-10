import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Form from './Components/Form';
import "../src/CSS/formStyle.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
