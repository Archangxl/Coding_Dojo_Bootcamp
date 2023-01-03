function pizzaOven(orderNumber,bread, protein, cheese, toppings) {
    let pizza = {};
    pizza.orderNumber = orderNumber;
    pizza.bread = bread;
    pizza.protein = protein;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
};

let orderOne = pizzaOven("Order One","deep dish", "traditional", "mozzarella", ["pepperoni","sausage"]);
let orderTwo = pizzaOven("Order Two","hand tossed","marinara",["mozzerella","feta"],["mushrooms","olives","onions"]);


let orderThree = pizzaOven("Order Three", "deep dish", "sausage", "mozzarella",["pineapple", "Ham"]);
let orderFour = pizzaOven("Order Four","flat bread","", "mozzarella","basil");

function numGen(arr) {
    num = Math.floor(Math.random()* (arr.length));
    return num;
}; 

function randomPizza(){
    let bread = ["thin crust", "traditional", "deep dish"];
    let protien = ["ham", "pepperoni","sausage"];
    let cheese = ["mozzarella"]
    let toppings = ["extra mozzarella","basil", "pineapple",];
    let breadChoice = numGen(bread);
    let protienChoice = numGen(protien);
    let cheeseChoice = numGen(cheese);
    let toppingsChoice = numGen(toppings);
    let order = [
        "Order",
        bread[numGen(bread)],
        protien[numGen(protien)],
        cheese[numGen(cheese)],
        toppings[numGen(toppings)]
    ]
    console.log(order);
};
