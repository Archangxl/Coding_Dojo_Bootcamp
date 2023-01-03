//page 39-40

function threeFives() {
    let sum = 100;
    for(let i = 101; i <=4000000;i++) {
        sum += i;
    }
    if(sum % 3 === 0) {
        return `This sum ,${sum}, is evenly divisible by 3!`;
    } else if (sum % 5 === 0) {
        return `This sum ,${sum}, is evenly divisible by 5!`;
    }
};

function betterThreeFives(firstValue, secondValue) {
    let sum = firstValue;
    for(let i = firstValue+1; i <= secondValue; i++) {
        sum+=i;
    }
    if(sum % 3 === 0) {
        return `This sum ,${sum}, is evenly divisible by 3!`;
    } else if (sum % 5 === 0) {
        return `This sum ,${sum}, is evenly divisible by 5!`;
    }
};


function generateCoinChange(cents) {
    let change = {
        quater: 0,
        dime: 0,
        nickel: 0,
        penny: 0
    }

    while(cents > 0) {
        if(cents > 25) {
            cents -= 25
            change.quater++;
        } else if(cents >= 10) {
            cents -= 10
            change.dime++;
        } else if(cents >= 5) {
            cents -= 5;
            change.nickel++;
        } else {
            cents-= 1;
            change.penny++;
        } 
    }
    return change;
}

// page 41

function rollDice() {
    let numOne = Math.floor(Math.random()*6+1);
    let numTwo = Math.floor(Math.random()*6+1);
    let count = 0;
    while(numOne != numTwo) {
        numOne = Math.floor(Math.random()*6+1);
        numTwo = Math.floor(Math.random()*6+1);
        if(numOne === numTwo) {
            return `It took ${count} times to have both dice roll a ${numOne}`;
        }
        count++;
    }
    
}

function sumToOne(num) {
    let sum = 0;
    let numDigit = num + "";
    let i = 0;
    while (i < numDigit.length) {
        sum += Number(numDigit.charAt(i)); /* Number(): newly learned concept, forces a number in "" into a number state */
        i++;
    }
    return sum;
}

//page 42

function fibonacci(num) {
    let arr = [0,1];
    let i = 0;
    while(i < num-1) {
        arr.push(arr[i] + arr[arr.length -1]);
        i++;
    }
    return arr;
};

//page 43 Data Sufficiency

