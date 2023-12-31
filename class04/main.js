"use strict";
// console.log("Class 4");
// Revision
// let firstName: string = "Muhammad"
// let lastName = "Mudassir"
// if (firstName === "Muhammad" && lastName === "Mudassir") {
//     console.log("You're allowed");
// } else {
//     console.log("You're not allowed");
// }
// Functions
// function greet() {
//     console.log("Hey Mudassir");
// }
// greet();  // Alt + Shift + Down key for Copy and Paste Below
// function sum() {
//     console.log(2+2);
// }
// sum();
// function greet( name :string , designation :string) {
//     console.log(`Hey my name is ${name} and I'm ${designation}`);
// }
// greet("Mudassir","Software Developer");
// greet("Ahmed","SEO");
// function sum(num1:number , num2:number) {
//     console.log(num1 + num2);
// }
// sum(5,6);
// Function With Conditions
// function multiply(num1:number , num2:number) {
//     if ( num1 === 5 && num2 === 6) {
//         console.log("Right Value");
//         console.log(num1 * num2);
//     } else {
//         console.log("Wrong Value");  
//     }
//     // console.log(num1 * num2);
// }
// multiply(5,6);
// Store value in Variable We pass value in return
// function multiply(num1:number , num2:number) {
//     // console.log(num1 * num2);  If we use this instead of return then output will undefined for our variable answer
//     return num1 * num2
// }
// let answer = multiply(5,6);
// console.log(answer);
// function sum(num1: number) {
//     console.log(num1 * 2);
// }
// sum(answer)
// function divide(num1: number) {
//     console.log(num1 / 2);
// }
// divide(answer)
// Arrays
// let fruits:string[] = ["Apple", "Banana", "Pineapple", "Orange"]
// fruits.push("Mango")
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[0],fruits[2]);
// console.log(fruits[0][3]);
// let id:number[] = [1, 2, 3, 4, 5]
// console.log(id);
// let allTypes = ["string", 9, true, false]
// console.log(allTypes);
// Push or Pop works for ending
// let menu = ["Kofta", "Biryani", "White Karahi", "Cocktail"]
// let myFirstPopped = menu.pop() //Store the value which popped out from the array and return in console below
// console.log(myFirstPopped);
// menu.push("Chicken Tikka", "Chicken Fried Rice")
// menu.pop()
// console.log(menu[3]);
// console.log(menu[2][2]);
// Shift or Unshift works for starting
// let menu = ["Kofta", "Biryani", "White Karahi", "Cocktail"]
// let myFirstPopped = menu.shift() //Store the value which popped out from the array and return in console below
// console.log(myFirstPopped);
// menu.unshift("Chicken Tikka", "Chicken Fried Rice")
// console.log(menu);
// menu.shift()
// console.log(menu[3]);
// Slice and Splice
// const fruits:string[] = ["Apple", "Banana", "Pineapple", "Orange"]
// const citrus = fruits.slice(1,3)
// console.log(fruits);
// console.log(citrus);
const fruits = ["Apple", "Banana", "Pineapple", "Orange"];
//let a = fruits.splice(2,1, "Mango", "Lemon") // store in variable to see deleted item
console.log(fruits[2]);
console.log(a);
