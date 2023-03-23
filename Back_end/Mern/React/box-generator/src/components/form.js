import React, {useState } from "react";

const Form = (props) => {
    const [color, setColor] = useState("");
    const {transferingArray, setTransferingArray} = props;

    const onCreate = (e) => {
        e.preventDefault();

        setTransferingArray([ ...transferingArray, color ]);
        setColor("");
    } 

    return (
        <div>
            <form onSubmit={ onCreate }>
                <div>
                    <label>Color: <input type="text" onChange={ (e) => setColor(e.target.value) } value={color}/></label>
                    <button>Add</button>
                </div>
            </form>
        </div>
    );
}
export default Form;