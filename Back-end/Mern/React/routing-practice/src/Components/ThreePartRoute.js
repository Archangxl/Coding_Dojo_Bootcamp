import { useParams } from "react-router-dom";
import React from 'react';

const ThreePartRoute = () => {
    const {word, textColor, backgroundColor} = useParams();

    return (
        <div className="d-flex justify-content-center m-5 border border-dark" style={{backgroundColor: backgroundColor}}>
            <h1 style={{color: textColor}}>{word}</h1>
        </div>
    );
}
export default ThreePartRoute;