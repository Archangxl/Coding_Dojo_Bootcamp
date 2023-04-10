import react from 'react';

const Form = ( ) => {

    return (
        <>
            <form className='form'>
                <h2>Product Manager</h2>
                <div className='box grid-1'>
                    <label>Title</label>
                    <input type="text"></input>
                </div>
                <div className='box grid-2'>
                    <label>Price</label>
                    <input type="text"></input>
                </div>
                <div className='box grid-3'>
                    <label>Description</label>
                    <textarea></textarea>
                </div>
                <div className='box grid-4'>
                    <button>Create</button>
                </div>

            </form>
        </>
    );

}
export default Form;