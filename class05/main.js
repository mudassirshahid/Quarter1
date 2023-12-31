"use strict";
console.log("class05");
//  Loops
// for (let i = 1; i < 11; i++) {
//     console.log(`${i}`);   
// }
// for (let i = 0; i < 10; i++) {
//     const element = i
//     console.log(`${element} "Hello World"`);   
// }
let students = ["Mudassir", "Hamza", "Ahmed"];
for (let i = 1; i <= 10; i++) {
    // console.log(`${i} ${students[0]} 👏`);
}
// Table
// for (let i = 1; i <= 10; i++) {
//     let ans = i * 2
//     console.log(`2 x ${i} = ${ans}`); 
// }
let arr = ["a", "b", "c", "d", "e"];
for (let index = 0; index <= 5; index++) {
    // console.log(`${arr[index]}`); 
}
// Table Task
for (let i = 1; i <= 10; i++) {
    let ans = i * 4;
    // console.log(`4 x ${i} = ${ans}`);  
}
// Nested Loops
for (let i = 0; i < 3; i++) {
    // console.log("Parent Loop", i);
    for (let j = 0; j < 4; j++) {
        // console.log("Child Loop", j);
    }
}
// let videos = [ "video1", "video2", "video3", "video4", "video5" ]
// console.log(videos.length);
// We use loop for automatically add videos that we add in our array
// for ( let i=0; i < videos.length; i++) {
// console.log(i);
// }
for (let i = 1; i <= 10; i++) {
    let ans = i * 6;
    // console.log(`6 x ${i} = ${ans}`); 
}
// Break
for (let i = 0; i < 3; i++) {
    // console.log("Parent Loop", i);
    break;
    for (let j = 0; j < 4; j++) {
        console.log("Child Loop", j);
    }
}
// Objectcs
// let video1 = {
//     title: "video1",
//     description: "First Video",
//     image: "https://image.com"
// }
// console.log(video1.description);
const videos = [
    {
        title: "video1",
        description: "First Video",
        image: "https://image.com",
        veiws: 1000,
    },
    {
        title: "video2",
        description: "First Video",
        image: "https://image.com",
        veiws: 1100,
    },
    {
        title: "video3",
        image: "https://image.com",
        veiws: 1200,
    },
];
console.log(videos[1].description);
// We use loop to print all videos title at once
for (let i = 0; i < videos.length; i++) {
    // console.log(videos[i].title); 
    console.log(videos[i].description);
}
