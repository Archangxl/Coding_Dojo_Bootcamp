import React ,{useEffect, useState} from 'react';
import Form from './Form';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const UpdateAuthor = () => {

    const {id} = useParams();

    const [sendingAuthor, setSendingAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [authorNameError, setAuthorNameError] = useState();
    const [userIdIsntInDatabase, setUserIdIsntInDatabase] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/oneAuthor/" + id)
            .then(res=>{
                setSendingAuthor(res.data);
                setLoaded(true);
            })
            .catch(err=>{
                setUserIdIsntInDatabase(true);
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
                userIdIsntInDatabase !== false ? 
                <>
                    <p>We're sorry, but we could not find the author you are looking for.</p>
                    <p>If you would like to add an author, please click "Add an Author" at the top right hand corner. </p>
                </>
                : loaded 
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