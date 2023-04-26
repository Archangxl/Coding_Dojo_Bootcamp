import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {

    const {id} = useParams();
    const [product, setProduct ] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.log(err))
    })
    const deleteProduct = (userId) => {
        axios.delete('http://localhost:8000/api/products/'+userId)
            .then(res=> console.log(res) )
            .catch(err=> console.log(err));
        
        navigate('/');
    }

    return (
        <div className="card">
            <p className="title">{product.title}</p>
            <p className="price" >Price: ${product.price}</p>
            <p className="description">Description: {product.description}</p>
            <div className="nav-bar">
                <button onClick={(e)=> {navigate('/')}}>Home</button>
                <button onClick={(e)=> {navigate('/edit/'+id )}}>Edit</button>
                <button onClick={(e)=>deleteProduct(id)}>Delete</button>
            </div>
        </div>
    );

}

export default SingleProduct;