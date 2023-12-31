"use strict";
//Union type |
// Union type used for given multiple type 
// let a:string | number | boolean = "Mudassir";
let hamzaOrder = {
    food: "Biryani"
};
let mudassirOrder = {
    food: "Biryani",
    dessert: "Cocktail"
};
console.log(hamzaOrder);
hamzaOrder = mudassirOrder; // No Error
// mudassirOrder = hamzaOrder  //Error / Missing Property 
console.log(hamzaOrder);
console.log(mudassirOrder);
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
sphere = ball;
ball = sphere;
let tube = { diameter: 12, length: 3 };
ball = tube;
tube = ball;
// Fresh vs Stale object
let std = { name: "mudassir" }; // Fresh //cannot provide extra properties
let std1 = std; // Stale  // ignoring extra properties 
