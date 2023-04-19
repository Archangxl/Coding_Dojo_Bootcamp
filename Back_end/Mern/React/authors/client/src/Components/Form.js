import React,{useState} from 'react';

const Form = (props) => {

    const {submitMethod, authorNameError, recievingAuthorName} = props;
    const [authorName, setAuthorName] = useState(recievingAuthorName);

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
                <button>Create</button>
            </form>
        </main>
    );

}
export default Form;