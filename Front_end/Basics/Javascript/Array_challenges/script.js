// 1. Always Hungry

function alwaysHungry(arr) {
    let array = []
    for(let i = 0; i < arr.length;i++){
        if(arr[i] === "food") {
            console.log("yummy");
        } else if (arr[i] != "food") {
            array.push("I'm hungry")
        }
    }
    if (arr.length === array.length) {
        console.log("I'm hungry");
    }
};

//alwaysHungry([3.14, "food", "pie", true, "food"]);
//alwaysHungry([4, 1, 5, 7, 2]);


// 2. High Pass Filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i])
        };
    }
    return filteredArr;
}
//var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
//console.log(result);


// 3. Better than average

function betterThanAverage(arr) {
    var sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    sum = sum / arr.length;
    var count = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > sum) {
            count++;
        }
    }
    return count;
}
//var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
//console.log(result); 


// 4. Array Reverse 

function reverse(arr) {
    let array = [];
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        array.unshift(arr[i])
    };
    arr = array;
    return arr;
}

//var result = reverse(["a", "b", "c", "d", "e"]);
//console.log(result);


// 5. Fibonacci Array

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(let i = 0; i < n - 2;i++){
        let first = fibArr[fibArr.length -1];
        let second = fibArr[i];
        fibArr.push(first + second);
    }
    return fibArr;
}

//var result = fibonacciArray(10);
//console.log(result);
