"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("class06");
const service_1 = require("./service");
// import { x,y,z } from "./hello"
// Scope
// Global scope
// let a = 30 
// if (true) {
//     // let a = 20;
//     const b = 10
//     var c = 30
//     // console.log(a); can be access through let on  line no 6
// }
// console.log(a); Error shows because a is block scope this is for if condition
// console.log(b); Error shows because a is block scope this is for if condition
// let or const is block scope
// var is function scope we access var in condition and loop but not in function
// var a = 10
// let b = 20
// const c = 30
// if (true) {
//     // console.log(a);
//     // console.log(b);
//     // console.log(c); 
// }
// // function scope() {
// //     console.log(a);
// //     console.log(b);
// //     console.log(c); 
// // }
// // scope()
// Modules
// When we work on large applications we use modules like component
// Module is isolated like if error is in one file then another file would not affect
console.log(service_1.f);
console.log(service_1.g);
console.log(service_1.h);
console.log(service_1.i);
console.log(service_1.j);
console.log(service_1.k);
