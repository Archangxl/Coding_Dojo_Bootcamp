import {useParams, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateForm = () => {

    const {id} = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState(""); 

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => {
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
            .catch(err => console.log(err));
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        axios.put('http://localhost:8000/api/products/'+ id, {
                title,
                price,
                description
            }
        )
            .then(res => console.log(res))
            .catch(err => console.log(err));
        
        navigate('/'+id);
    }

    const deleteProduct = (userId) => {
        axios.delete('http://localhost:8000/api/products/'+userId)
            .then(res=> console.log(res) )
            .catch(err=> console.log(err));
        
        navigate('/');
    }

    return (
        <>
            <form onSubmit={onSubmitHandler} className='form'>
                <div className='header'>
                    <h2>Product Manager</h2>
                </div>
                <div className='nav-bar'>
                    <button onClick={(e)=> {navigate('/')}}>Home</button>
                    <button onClick={(e)=>deleteProduct(id)}>Delete</button>
                </div>
                <div className='box grid-1'>
                    <label>Title</label>
                    <input name="title" value={title} onChange={(e)=> setTitle(e.target.value)} type="text"></input>
                </div>
                <div className='box grid-2'>
                    <label>Price</label>
                    <input name="price" value={price} type="number" onChange={(e)=> setPrice(e.target.value)}></input>
                </div>
                <div className='box grid-3'>
                    <label>Description</label>
                    <textarea name="description" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
                </div>
                <div className='box grid-4'>
                    <button className='formSubmitButton'>Submit</button>
                </div>

            </form>
        </>
    );

}

export default UpdateForm;