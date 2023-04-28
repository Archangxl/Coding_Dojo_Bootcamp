import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav';
import List from './Components/List';
import Statuses from './Components/Statuses';
import Form from './Components/Form';
import './CSS/style.css';

function App() {
    return (
    <>

        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/players/list"  element={ <List /> } />
                <Route path="/status/game/:id"  element={ <Statuses /> } />
                <Route path="/players/addPlayers"  element={ <Form /> } />
            </Routes>
        </BrowserRouter>

    </>
    );
}

export default App;
