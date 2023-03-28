let n = 5;
// * Build a function that returns an array of integers from n to 1 where n>0.
// * Example : n=5 --> returns [5,4,3,2,1]

let arrayNtoOne = [];

for (let i = n; i > 0; i--) {
    arrayNtoOne.push(i);
}
console.log(arrayNtoOne);


// * Build a function that returns an array of integers from 1 to n but with every number multiplied by two 
// * Example: n=5 --> returns [2,4,6,8,10]

let arrayNtoOneEvens = [];

for (let i=1; i <= n; i++) {
    arrayNtoOneEvens.push(i*2);
}
console.log(arrayNtoOneEvens);





let food = 'Pizza';
// * Build a function that loops through the string 'food' and console.log every character in the string 
// ! HINT: try looping through the string like you would an array 

for (let i= 0; i < food.length; i++) {
    console.log(food.charAt(i));
}



const students = [
    {name:'Gregg', currentStack: 'MERN', belt:'Red'},
    {name:'Macy', currentStack: 'MERN', belt:'Orange'},
    {name:'Tom', currentStack: 'MERN', belt:'Black'},
    {name:'Ashley', currentStack: 'MERN', belt:'Black'},
    {name:'Ashton', currentStack: 'Python', belt:'Orange'},
    {name:'Bob', currentStack: 'MERN', belt:'Red'},
    {name:'Fil', currentStack: 'Java', belt:'N/A'},
    {name:'Nancy', currentStack: 'MERN', belt:'N/A'},
    {name:'Brenda', currentStack: 'Java', belt:'Black'},
    {name:'Jason', currentStack: 'Python', belt:'Orange'},
    {name:'Parker', currentStack: 'Python', belt:'N/A'},
    {name:'Jenn', currentStack: 'Web Fundamentals', belt:'Yellow'},
];
// * Build a function that, given the list of students above determines and returns how many have belted in their currentStack. The output with the data provided should be 9 

let belted = students.filter(student => student.belt != "N/A");
console.log(belted.length)






let coordinates = [
    {x:1, y:2}, // false
    {x:3, y:1}, // false
    {x:4, y:6}, // true count:1 
    {x:5, y:5}, // true count:2
];
let num = 10;
// * Build a function that takes the list of 'coordinates' and 'num' above and returns back a number of how many times x+y === num
// * the output with the data provided should be 2










let nums = [1,2,3,4];
// * Reverse an array 
// * example reverseArr([1,2,3,4]) would return [4,3,2,1]
// * To start you can create a new array and return that 
// * Bonus challenge try to solve the problem without making a second array (working in place)