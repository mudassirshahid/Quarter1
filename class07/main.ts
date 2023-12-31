//Union type |
// Union type used for given multiple type 
// let a:string | number | boolean = "Mudassir";

// a = 10;
// a = true 

// toFixed() used for add zero in prices like 2000.00 and use with only number  

// let price:number = 2000
// console.log(price.toFixed(2));

// let age:string | number | boolean;
// age = 20;
// console.log(age);
// console.log(typeof age);


// age = "aa"
// console.log(age);
// console.log(typeof age);

// age = true
// console.log(age);
// console.log(typeof age);


// Narrowing with Ternary operator

// Math functions
         //   if condition    if true   else
// let newAge = Math.random() > 0.5 ? 22 : "Mudassir";
// // console.log(newAge);


// //To implement narrowing we use typeof
// if (typeof newAge === "string") {
//     // newAge.toLowerCase()
//     console.log(newAge.toUpperCase());
    
// }
// else {
//     newAge.toFixed(2)
// }
// console.log(newAge);

// To add only the given values that we mention below we use literal types like direct assign value  
// let trafficLights: "red"| "yellow" | "green" | 3;

// trafficLights = 3;

// if we use - then we will write value in double quotes like "full-name" and get value like this teacher["full-name"]

// let teacher: {
//     name: string,
//     salary: number,
//     "full-name": string
// } = {
//     name: "Hamza",
//     salary: 30000,
//     "full-name": "Syed Hamza"
// }
// console.log(teacher.salary);
// console.log(typeof teacher.salary);
// console.log(teacher["full-name"]);


// type alias
// we use below type alias method for reusibilty and maitainable code we made custom type name like Student and assign it to let a:

// type Student = string | boolean | number | undefined

// let a: Student;

// a = "Ali"
// a = 222
// a = true


type Deal1 = {
    food: string
}

type Deal2 = {
    food: string,
    dessert: string
}

let hamzaOrder: Deal1 = {
    food: "Biryani"
}

let mudassirOrder: Deal2 = {
    food: "Biryani",
    dessert: "Cocktail"
}
console.log(hamzaOrder);

hamzaOrder = mudassirOrder // No Error
// mudassirOrder = hamzaOrder  //Error / Missing Property 
console.log(hamzaOrder);
console.log(mudassirOrder);

// Interface

interface Ball {
    diameter: number
}

interface Sphere {
    diameter: number
}

interface Tube {
    diameter: number,
    length: number
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

sphere = ball
ball = sphere

let tube: Tube = { diameter: 12, length: 3 };

ball = tube 
tube = ball

// Fresh vs Stale object

let std = { name: "mudassir" }  // Fresh //cannot provide extra properties
let std1 = std  // Stale  // ignoring extra properties 