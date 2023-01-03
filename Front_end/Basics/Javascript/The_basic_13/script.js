// Print 1-255

function printOneToTwoHundredAndFiftyFive() {
    let num = 1;
    while(num <=255) {
        console.log(num);
        num++;
    }
}

//Print Sum 0-255;

function printSumZeroToTwoHundredAndFiftyFive() {
    let sum = 0;
    let num = 0;
    while (num <= 255) {
        sum += num;
        num++;
    }
    return sum;
}

//Find and Print Max

function findAndPrintMax(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

//Array with Odds 

function arrayWithOdds() {
    let i = 1;
    let arr = [];
    while(i <= 255) {
        if(i%2 === 1) {
            arr.push(i);
        }
        i++;
    }
    return arr;
};

//Greater than Y

function greaterThanY(arr,y) {
    count = 0;
    i = 0;
    while (i <arr.length) {
        if(arr[i] > y) {
            count++;
        }
        i++;
    }
    return count;
}

//Max, Min, Average 

function maxMinAverage(arr) {
    sum = 0;
    max = arr[0];
    min = arr[0];
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
        if(arr[i] > max) {
            max = arr[i];
        }
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    average = sum / arr.length;
    console.log(max);
    console.log(min);
    console.log(average);
}

//Swap String for Array Negative Values

function swapStringForArrayNegativeValues(arr) {
    let i = 0;
    while(i < arr.length) {
        if(arr[i] < 0) {
            arr[i] = "dojo";
        }
        i++
    }
    return arr;
}

//Prints Odds 1-255;

function printOddsOneThroughTwoHundredAndFiftyFive() {
    for(let i = 0; i <= 255; i++) {
        if(i%2 === 1) {
            console.log(i);
        }
    }
};

//Iterate and Print Array

function iterateAndPrintArray(arr) {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

//Get and Print Average

function getAndPrintAverage(arr) {
    let i = 0;
    let average = 0;
    while(i < arr.length) {
        average += arr[i];
        i++;
    }
    return average / arr.length;
}

//Square the Values
function squareTheValues(arr) {
    let i = 0;
    while(i<arr.length) {
        arr[i] = arr[i] * arr[i];
        i++;
    }
    return arr;
}

//Zero Out Negative Numbers

function zeroOutNegativeNumbers(arr) {
    let i = 0;
    while(i<arr.length) {
        if(arr[i] < 0) {
            arr[i] = 0;
        }
        i++;
    }
    return arr;
}

//Shift Array Values

function shiftArrayValues(arr) {
    for(let i = 0; i<arr.length;i++) {
        if(arr[i] === arr[0]) {
            arr.shift();
        }
    }
    arr.push(0);
    return arr;
};