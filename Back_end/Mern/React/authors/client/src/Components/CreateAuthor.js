import {useState} from 'react';
import Form from './Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateAuthor = () => {
    const [authorNameError, setAuthorNameError] = useState();
    const navigate = useNavigate();

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

    return (
        <>  
            <Form recievingAuthorName={""} submitMethod={createSubmit} authorNameError={authorNameError} />
        </> 
    );

}
export default CreateAuthor;