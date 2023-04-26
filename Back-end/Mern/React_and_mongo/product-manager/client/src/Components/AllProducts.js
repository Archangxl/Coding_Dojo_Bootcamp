import react, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = (props) => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setAllProducts(res.data.products);
        })
        .catch(err => console.log(err));
    })

    return (
        <footer>
            <div className='header'>
                <h2>All Products</h2>
            </div>
            {
                allProducts.map((product, index) => {
                    return (
                        <div key={index} className='list'>
                            <Link to={'/'+ product._id} >
                                <p className='title'>{product.title}</p>
                            </Link>
                            <p><Link to={'/edit/' + product._id}>Edit</Link></p>
                        </div>
                    )
                })
            }
        </footer>
    );
}

export default AllProducts;