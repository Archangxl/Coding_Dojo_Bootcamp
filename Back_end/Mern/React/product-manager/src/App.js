import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Form from './Components/Form';
import AllProducts from './Components/AllProducts';
import "../src/CSS/formStyle.css"
import SingleProduct from './Components/SingleProduct';

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route 
                path="/" 
                element={
                <Form>
                    <AllProducts />
                </Form> }
            />

            <Route path="/:id" element={ <SingleProduct /> }/>

        </Routes>
    </BrowserRouter>
    );
}

export default App;
