import React ,{useEffect, useState} from 'react';
import Form from './Form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateAuthor = () => {

    const {id} = useParams();
    const [sendingAuthor, setSendingAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [authorNameError, setAuthorNameError] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/oneAuthor/" + id)
            .then(res=>{
                setSendingAuthor(res.data);
                setLoaded(true);
            })
    }, [])

    const updateSubmit = authorName => {
        axios
            .put("http://localhost:8000/api/updateAuthor/"+id, authorName)
            .then(res=>{
                console.log(res);
                navigate('/');
            })
            .catch(err=>setAuthorNameError(err.response.data.errors.authorName.message));
    }

    return (
        <>
            {
                loaded 
                &&
                <Form 
                    submitMethod={updateSubmit} 
                    authorNameError={authorNameError} 
                    recievingAuthorName={sendingAuthor.authorName}
                /> 
            }
        </>
    )

}
export default UpdateAuthor;