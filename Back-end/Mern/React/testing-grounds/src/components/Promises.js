import React from 'react';

const Promises = () => {

    const noMondays = new Promise( (resolve, reject) => {
        if(new Date().getDay() === 1) {
            resolve("Good, it's not Monday!");
        } else {
            reject("Someone has a case of the Mondays!");
        }
    });
    noMondays
        .then( res => console.log(res) )
        .catch( err => console.log(err) );

    const stringHas8Letters = new Promise( (resolve, reject) => {
        const string = "Helloooo";
        if (string.length === 8 ) {
            resolve("Thats the number we want!");
        } else {
            reject("This string has "+ string.length +" characters!");
        }
    } );

    stringHas8Letters
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
}

export default Promises;