// // console.log("hello");
// type Children = {
//     name: string,
//     age: number 
// }

import { log } from "console"

// type Person = {
//     name: string,
//     age: number ,
//     email: string
// }

// let person1: Person = {
//     name: "Mudassir",
//     age: 20,
//     email: "mudassirshahid84@gmail.com"
// }

// let person2 = {   //Fresh object cannot pass extra property in fresh obj
//     name: "Shahdin",
//     age: 20,
// }

// person2 = person1;  // Stale object when we pass reference
// console.log(person2.name);
// // person1 = person2;  //Error

// type Student = {
//     name: string,
//     rollNumber: number
// }

// type Teacher = {
//     name: string,
//     experience: number
// }

// let student1: Student = {
//     name: "Mudassir",
//     rollNumber: 1
// }

// let teacher1: Teacher = {
//     name: "Zia",
//     experience: 10
// }

// Union
// In union only add common values 

// let both: Student | Teacher = {
//     experience: 20,
//     name: "Ali",
//     rollNumber: 2
// }
// both.name

 
// Intersection takes all values

// let both: Student & Teacher = {
//     experience: 20,
//     name: "Ali",
//     rollNumber: 2
//  }
//  both.experience

// Any type 

// let a: any = 10;
// let b: boolean = true;

// a = b
// console.log(a);
// console.log(b);

//Unknown type means idk the value you can assign any value 

// let a: unknown = "hello";
// // let b: boolean = true;
// let b: string = "string";

// a = b
// //b = a  // Error  
// console.log(a);

// let a: unknown = "hello";
// let b: any = 6;
// let c: unknown = "aa"

// a = b
// b = a  
// a = c
// console.log(a);

//Never 

// let a: string = "Hello";


// if (typeof a === "string") {
//     console.log(a);
// } else {
//     console.log(a); 
// }

// Explcit

// let myName: unknown = "Mudassir";
// console.log((myName as string).toUpperCase);
// console.log(myName);

// let a: string = "Mudassir";
// let b: unknown = 20;

// a = b as string;
// console.log(typeof a);

//a = b as number; //error


// Enum
// In the below code case sensitive error not shows in output so we use enum
// let meetingDay: string = "monday";

// if (meetingDay === "Sunday") {
//     console.log("No Meeting"); 
// } else if (meetingDay === "Monday") {
//     console.log("Meeting at 10:00 pm");  
// }
// We use enum as a datatype or value
// enum Days {
//     Sunday,   //0
//     Monday,   //1  
//     Tuesday,   //2
//     Wednesday,   //3
//     Thursday,   //4
//     Friday,   //5
//     Saturday   //6
// }
// console.log(Days.Wednesday); // Output 3

// let meetingDay: Days = Days.Monday;

// if (meetingDay === Days.Monday) {
//     console.log("No Meeting"); 
// } else if (meetingDay === Days.Sunday) {
//     console.log("Meeting at 10:00 pm");  
// }

// Calculator using enum


// enum Operator {
//     addition,
//     subtraction,
//     multiplication,
//     division
// }
// let cal: Operator = Operator.addition
// if (cal === Operator.addition) {
//     console.log(5 + 5);
// }

// enum Color1 { Red = 1, Green, Blue }
// var colorName: string = Color1[2]
// console.log(colorName);


// const enum Color1 { Red = 1, Green, Blue }
// var colorName: number = Color1["Green"]
// console.log(colorName);


// Arrays

// type Person ={
//     name: "string"
// }

// let p:Person[] = [
//     {
//         name: "Mudassir"
//     },
//     {
//         name: "Shahdin"
//     },
// ]
// console.log(p[0].name);


let guessNumber = Math.floor(Math.random()*10)
console.log(guessNumber);





