//DAY 1
// Topic 1 : Introduction to JavaScript and its role in web development.
// Resources :
// - https://medium.com/@dhanushkumarsuresh/introduction-to-javascript-and-its-role-in-web-development-8d920aa7b553
// - https://medium.com/@garry-williams/the-role-of-javascript-in-modern-web-development-b440bb813f14

// Topic 2 : How JavaScript works behind the scenes.
// Topic 3 : Understanding the Execution Context - Memory and Execution Phases.
//Topic 4 : Memory allocation of variables and functions, and the Code Execution phase.

// Resources :
// - https://www.youtube.com/watch?v=8aGhZQkoFbQ
// - http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// - https://nazdelam.medium.com/all-you-need-to-learn-to-understand-javascript-execution-context-and-stack-3babbdd88868
// - https://thomas0x99.medium.com/how-javascript-works-behind-the-scene-aac6c07da207

//Topic 5 : Overview of JavaScript as a single-threaded and synchronous language
// Resources :
// - https://www.bing.com/search?q=Overview+of+JavaScript+as+a+single-threaded+and+synchronous+language
// - https://medium.com/swlh/what-does-it-mean-by-javascript-is-single-threaded-language-f4130645d8a9

//Topic 6 : Variable declaration in JavaScript; data types - primitive and non-primitive.
// Resources :

// Program : 
/**
 * Primitive type vs Reference Type
*/
// let num1 = 10;
// let arr1 = [1, 2, 3];
// console.log(num1); //log initial values
// console.log(arr1);
// let num2 = num1;
// let arr2 = arr1;
// console.log(num2);
// console.log(arr2);
// num2 *= 2;
// arr2[0] = 0; // arrays are mutable
// //log changed values
// console.log(`changed values`);
// console.log(num1);
// console.log(arr1);
// console.log(num2);
// console.log(arr2);
// arr3 = [10, 20, 30];
// arr2 = arr3;
// console.log(arr2);
// arr2[0] = 0;
// console.log(arr2);
// console.log(arr3);
// console.log(arr1);
// //testing isArray method
// console.log(Array.isArray(arr1));

//console.log(typeof null);

//Topic 7 : Hoisting in JavaScript: How variables and functions are hoisted; differences in hoisting of var, let, and const

//Resources :
// - https://medium.com/@jeremy_levy/var-let-const-hoisting-and-temporal-dead-zone-in-javascript-d26e2207c823
// - https://antdp425.medium.com/javascript-var-let-and-const-feat-hoisting-dab8686ff7b4

// Topic 8 : Understanding Scoping in JavaScript - global, functional, and block scopes.
// Resources :
// - https://medium.com/swlh/block-function-and-global-scope-in-javascript-39f799bf6167


// Topic 9 : Exploring JavaScript Errors: Reference Error, Initialization Error, and differences between undefined, null, and not defined
// Resources : 
// - https://medium.com/@janelle.wg/common-javascript-errors-and-what-they-actually-mean-74fbf32e986b
// - https://2ality.com/2021/01/undefined-null-revisited.html
// - https://iifx.dev/en/articles/23273720


//DAY 2
// Topic 1 : Understanding how the Call Stack works in JavaScript
// - https://www.javascripttutorial.net/javascript-call-stack/

// Topic 2 : Callbacks, Promises, and async/await with examples

// Callbacks :
// setInterval(() => {
//   const today = new Date();
//   const hours = today.getHours();
//   const minutes = today.getMinutes();
//   const seconds = today.getSeconds();
//   const formattedTime = `${hours}:${minutes}:${seconds}`;
//   console.log(formattedTime);
// }, 1000);

// //Promises
// console.log("Line before promise");

// //v1
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise1 resolved");
//   }, 1000);
// });
// promise1.then((data) => {
//   console.log(data);
// });

// //v2
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise2 resolved");
//     }, 1000);
//   });
// }
// const promise2 = fetchData();
// promise2.then((data) => {
//   console.log(data);
// });

// console.log("Line after promise, but prints before, bcz sync code");

// //async-await

// async function fetchDataandLog() {
//   try {
//     const data = await fetchData();
//     console.log("async-await : ", data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchDataandLog();

// Topic 3 :  Asynchronous JavaScript and the Event Loop
// - https://www.taniarascia.com/asynchronous-javascript-event-loop-callbacks-promises-async-await/

// Topic 4 :  Arrow functions and the use of the this keyword with normal and arrow functions
// - https://medium.com/@tejeswar_79802/understanding-arrow-functions-vs-normal-functions-in-javascript-d83ea250f554#:~:text=In%20normal%20functions%2C%20%E2%80%9Cthis%E2%80%9D%20refers%20to%20the%20object,value%20of%20%E2%80%9Cthis%E2%80%9D%20from%20the%20surrounding%20lexical%20scope.

