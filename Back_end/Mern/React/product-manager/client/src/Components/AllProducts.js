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
            <p>All Products</p>
            {
                allProducts.map((product, index) => {
                    return (
                        <div key={index}>
                        <Link to={'/'+ product._id} >
                            <p>{product.title}</p>
                        </Link>
                    </div>
                    )
                })

            
            }
        </footer>
    );
}

export default AllProducts;