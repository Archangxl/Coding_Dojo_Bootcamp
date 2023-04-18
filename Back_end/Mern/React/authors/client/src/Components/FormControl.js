import {useEffect, useState} from 'react';
import Form from './Form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormControl = () => {
    const {id} = useParams();
    const [authorName, setAuthorName] = useState();
    const [authorNameError, setAuthorNameError] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (id !== undefined) {
            console.log("Id isn't undefined");
            axios
            .get("http://localhost:8000/api/oneAuthor/" + id)
            .then(res=> {
                setAuthorName(res.data.authorName);
            })
        }
    })

    const createSubmit = author => {
        axios
            .post("http://localhost:8000/api/newAuthor", author)
            .then(res=> {
                console.log(res.data);
                navigate("/");
            })
            .catch(err => {
                setAuthorNameError(err.response.data.errors.authorName.message);
            });
    }

    const update = author => {
        axios   
            .put("http://localhost:8000/api/updateAuthor/"+id, {author})
            .then(res=>{
                console.log(res)
                navigate("/");
            })
            .catch(err => {
                setAuthorNameError(err.response.data.errors.authorName.message);
            });
    }

    return (
        
        id === undefined ? 
        <>  
            <Form transferedAuthorName={authorName} submitMethod={createSubmit} authorNameError={authorNameError} />
        </> 
        
        : 
        <>
            <Form 
            transferedAuthorName={authorName} 
            submitMethod={update} 
            authorNameError={authorNameError}/>
        </>
    );

}
export default FormControl;