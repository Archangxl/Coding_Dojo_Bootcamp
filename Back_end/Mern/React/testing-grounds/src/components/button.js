
import React from 'react';

const Button = (props) => {
    return (
        <>
            <button onClick={ ()=> alert("Clicked")}>Clicked</button>
            <input onFocus={(e) => console.log("focus")} />
            <input onBlur={(e) => console.log("blur")} />
        </>
    );
}
export default Button;