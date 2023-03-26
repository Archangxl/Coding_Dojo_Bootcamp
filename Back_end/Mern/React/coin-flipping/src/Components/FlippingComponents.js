import React from 'react';

const FlippingComponents = () => {

    const coinFlipper = () => { 
        return Math.random() > 0.5 ? "heads": "tails";
    }
    const coinFlipperTracker = new Promise((resolve, reject) => {
        let heads = 0;
        let count = 0;
        while (heads < 5) {
            count++
            if (count < 100) {
                let result = coinFlipper();
                if(result === "heads") {
                    heads++;
                } else {
                    count++;
                }
            } else {
                reject("The coin has flipped more than a hundred times without getting 5 heads, YOU LOSE!");
            }
        }
        resolve("It only took the coinFlipped function "+count+ " times to get heads 5 times!");
    } )
    
    coinFlipperTracker
        .then(res => console.log(res) )
        .catch(err => console.log(err) );

    console.log("Uhh is this running!");
}
export default FlippingComponents;