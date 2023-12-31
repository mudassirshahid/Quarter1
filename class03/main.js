"use strict";
// let userName:string = "Muhammad Mudassir"
// userName = "Mudassir"
// console.log(userName);
// If you are not passing value on first line then the type is any and you can pass different type in next lines
// let userName:any
// let userName
// userName = "Muhammad Mudassir"
// userName = 786
// console.log(userName);
// Error shows in second line because we pass value in a first line and the value type is string
// let userName = "Muhammad Mudassir"
// userName = 786
// console.log(userName);
// Conditions
// String Comparision
// let studentGender = "Male";
// if ( studentGender === "Male" ) {
//     console.log("Entry Successfully");
// }
// else  {
//     console.log("No Entry");      
// }
// With Any 
// let studentGender:any = "Male";
// if ( studentGender === 10 ) {
//     console.log("Entry Successfully");
// }
// else  {
//     console.log("No Entry");      
// }
// Number Comparision
// let studentNumber = 80;
// if ( studentNumber >= 80 ) {
//     console.log("You got A grade");
// } 
// else  {
//     console.log("Fail");      
// }
// let salary = 150000;
// let monthlyExpense = 100000;
// if ( salary === 50000 ) {
//     console.log("You have not enough money");   
// }
// else {
//     console.log("You have enough money");
// }
console.log("Taking Decision");
// if (false) {
//     console.log("Decision True");
// }
// if (true) {
//     console.log("Decision True");
// }
// if (2>3) {
//     console.log("2 greater than three");   
// }
// let raita = true
// let biscuits = true
// if (raita) {
//     console.log("Buy Samosa");
// } 
// else if (biscuits) {
//     console.log("Buy Biscuits");
// }
// else {
//     console.log("Don't Buy");
// }
// Budget
// let budget = 40000
// let cycle = 45000
// let color = "red"
// if (((color == "Black" || color == "Blue"|| color == "red") && cycle <= budget)) {
//     console.log("Buy cycle");
// } else {
//     console.log("I need to build my skills to earn more");  
// }
// Different Ways
// if (color == "Black" || color == "Blue"|| color == "red" && cycle <= budget) {
//     console.log("Buy cycle");
// } else {
//     console.log("I need to build my skills to earn more");  
// }
// Different Ways
// if (((color == "Black" || color == "Blue") && cycle <= budget) || color == "red") {
//     console.log("Buy cycle");
// } else {
//     console.log("I need to build my skills to earn more");  
// }
// Practice
let bikePrice = 100000;
let purchasingBudget = 100000;
let model = 2023;
let color = "blue";
if (bikePrice <= purchasingBudget && model === 2023) {
    // console.log("Buy");
    if (color === "Black" || color === "Red") {
        console.log("buy");
    }
    else {
        console.log("Don't Buy because color not matched");
    }
}
else {
    console.log("Don't Buy");
}
// OR Operator
// let num:any = "3"
// let username = "Mudassir"
// console.log(num)
// console.log(num === 2 || username =="Mudassir");
// AND Operator
// let num:any = "3"
// let username = "Mudassir"
// console.log(num)
// console.log(num === 2 && username =="Mudassir");
