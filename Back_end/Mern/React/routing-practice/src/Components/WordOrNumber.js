import React from 'react';
import { useParams } from 'react-router-dom';

const WordOrNumber = () => {

const {wordOrNumber} = useParams();

    if (isNaN(wordOrNumber) === true) {
        return (
            <div className="d-flex justify-content-center">
                <h1>The word is: {wordOrNumber}</h1>
            </div>
        )
    } else if (isNaN(wordOrNumber) === false) {
        return (
            <div className="d-flex justify-content-center">
                <h1>The number is: {wordOrNumber}</h1>
            </div>
        );
    }

}
export default WordOrNumber;