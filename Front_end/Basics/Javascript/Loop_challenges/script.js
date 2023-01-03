// 1. Print adds 1-20

function odds() {
    for(let i = 1; i < 21; i++) {
        if(i % 2 === 1) {
            console.log(i);
        }
    }
}

// 2. Decreasing Multiples of 3

function multiplesOfThree(){
    for(let i=100; i>-1;i--){
        if(i % 3 === 0) {
            console.log(i);
        }
    }
}

// 3. Print the Sequence 

function sequence() {
    let array = [];
    for(let i = 4; i>-4;i-=1.5){
        console.log(i);
    }
}

// 4. Sigma 

function sigma() {
    let sum = 0;
    let string = "";
    for(let i = 1; i < 101; i++) {
        sum += i;
        if (i === 100) {
            array += (i)
        } else {
        string += (i + " + ");
        }
    }
    console.log(sum);
    console.log(array);
}

// 5. Factorial 

function factorial() {
    let product = 1;
    let string = "";
    for (let i = 1; i < 13; i++) {
        product *= i;
        if( i === 12) {
        string += i;
        } else {
        string += i + " * ";
        }
    }
    console.log(product);
    console.log(string);
}
