import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteButton = (props) => {
    const {id} = props;
    const navigate = useNavigate();

    const deleteAuthor = id => {
        console.log(id);
        axios   
            .delete('http://localhost:8000/api/deleteAuthor/'+id)
            .then(res=>{
                console.log(res);
                navigate('/');
            })
            .catch(err=>console.log(err));
    }

    return (
        <button onClick={(e)=> deleteAuthor(id)}>Delete</button>
    );
}
export default DeleteButton;