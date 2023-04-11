import {useParams, Navigate} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const UpdateForm = () => {

    const {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/products"+id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    })

    return (
        <>
            <form onSubmit={onSubmitHandler} className='form'>
                <p>Product Manager</p>
                <div className='box grid-1'>
                    <label>Title</label>
                    <input onChange={(e)=> setTitle(e.target.value)} type="text"></input>
                </div>
                <div className='box grid-2'>
                    <label>Price</label>
                    <input type="number" onChange={(e)=> setPrice(e.target.value)}></input>
                </div>
                <div className='box grid-3'>
                    <label>Description</label>
                    <textarea onChange={(e)=> setDescription(e.target.value)}></textarea>
                </div>
                <div className='box grid-4'>
                    <button>Create</button>
                </div>

            </form>
        </>
    );

}

export default UpdateForm;