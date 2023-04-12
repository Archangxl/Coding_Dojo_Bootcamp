import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Form from './Components/Form';
import AllProducts from './Components/AllProducts';
import "../src/CSS/style.css"
import SingleProduct from './Components/SingleProduct';
import UpdateForm from './Components/UpdateForm';

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
            <Route path='/edit/:id' element={<UpdateForm />}/>

        </Routes>
    </BrowserRouter>
    );
}

export default App;