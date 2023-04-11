import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const SingleProduct = () => {

    const {id} = useParams();
    const [product, setProduct ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.log(err))
    })
    return (
        <div>
            <div>
                <p>{product.title}</p>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
            </div>
        </div>
    );

}

export default SingleProduct;