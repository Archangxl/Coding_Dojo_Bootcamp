import {useState} from 'react';
import axios from 'axios';

const Form = (props) => {   

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res)
                console.log(res.data);
            })
            .catch(err=>console.log(err));
    }

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
            {props.children}
        </>
    );

}
export default Form;