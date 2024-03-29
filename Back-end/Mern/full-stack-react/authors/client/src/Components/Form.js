import React,{useState} from 'react';
import DeleteButton from './DeleteButton';
import { useParams } from 'react-router-dom';

const Form = (props) => {

    const {submitMethod, authorNameError, recievingAuthorName} = props;
    const [authorName, setAuthorName] = useState(recievingAuthorName);
    const {id} = useParams();

    const submitHandler = e => {
        e.preventDefault();
        submitMethod({authorName});
    }

    return (       
        <main>
            <form onSubmit={submitHandler}>
                <p>{authorNameError}</p>
                <label>Author Name:</label>
                <input type="text" name="authorName" value={authorName} onChange={(e) => setAuthorName(e.target.value)}></input>
                <div className='submitButton'>
                    <button>Submit</button>
                    {recievingAuthorName !== "" ? <><span className="formDelete"><DeleteButton id={id} /></span></> : null}
                </div>
            </form>
        </main>
    );

}
export default Form;