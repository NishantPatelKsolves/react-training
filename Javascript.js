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




// Day 3
// Topic 1 : Understanding Functions in JavaScript

function add(a,b){ // Function Declaration/Statements
    return a+b;
  }
  console.log("Addition: ", add(2,2));
  
  const sub = function (c,d) { // Function Expression
    return c-d
  }
  console.log("Sub: ", sub(10,5));
  
  const multiply = (e,f)=>{ // Arrow Functions (ES6)
    return e*f
  }
  console.log("Multiply: ", multiply(5,2));
  
  setTimeout(function () { // Anonymous Functions
    console.log("Hello, 2 sec later");
  }, 2000);
  
  (function (){ console.log('Hello IIFE')})(); // IIFE
  
  // Rest Parameters and Spread
  
  function sum(...numbers) { // Rest parameters
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4,5));
  
  const nums = [1, 2, 3];
  console.log(sum(...nums)); // Spread syntax
  
  // Callbacks: A function passed as an argument to another function, executed later.
  function f1(f2) {
    const name = "abcd, CALLBACK";
    f2(name);
  }
  f1((name) => console.log(`Hello, ${name}`)); // 
  
  // Closures : A closure is a function that retains access to its outer scope, even after the outer function has executed.
  
  function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
      console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
  }
  const newFunc = outerFunction("Outside");
  newFunc("Inside"); // Output: Outer: Outside, Inner: Inside
  
  // Higher-Order Functions : A Higher-Order Function (HOF) is a function that either: 1) Takes another function as an argument, or 2) Returns a function as its result.
  
  // 1. Passing a function as an argument:
  function greet(name) {
    return `Hello, ${name}!`;
  }
  function customGreeting(name, callback) {
    return callback(name);
  }
  console.log(customGreeting("abcd", greet)); 
  
  // 2. Returning a function:
  function multiplyBy(multiplier) {
    return function (value) {
      return value * multiplier;
    };
  }
  const double = multiplyBy(2);
  console.log(double(5)); 
  console.log(double(6)); 
  
  const triple = multiplyBy(3);
  console.log(triple(5)); 
  console.log(triple(6)); 
  
  // Essential Array Methods: slice, pop, push, and their properties
  
  const stack = [];
  stack.push(10)
  stack.push(20)
  stack.push(30)
  stack.push(40)
  console.log('INITIAL Stack : ', stack)
  stack.pop();
  console.log('POP Stack : ', stack)
  const newStack1 = stack.slice(1,3)
  console.log('SLICE 1 Stack : ', newStack1)
  const newStack2 = stack.slice(-4,-1)
  console.log('SLICE 2 Stack : ', newStack2)
  
  // Splice: array.splice(start, deleteCount, item1, item2, ...);
  
  const fruits = ['apple', 'banana', 'cheery', 'date']
  const removed = fruits.splice(1, 2); 
  console.log(removed); 
  console.log(fruits);
  fruits.splice(1, 0, "kiwi", "grape"); 
  console.log(fruits); 
  fruits.splice(2, 1, "mango"); 
  console.log(fruits);
  
  // Split: split method is used on strings, not arrays. It splits a string into an array of substrings based on a specified delimiter. 
  
  const sentence = "split method is used on strings, not arrays.";
  
  const words = sentence.split(" ");
  console.log(words); 
  
  words.splice(4, 1, "to", "transform");
  console.log(words); 
  
  const newSentence = words.join(" ");
  console.log(newSentence); 
  
  // Iteration methods for Objects 
  
  // for...in Loop : The for...in loop iterates over all enumerable properties (including inherited ones) of an object.
  const obj1 = { a: 1, b: 2, c: 3 };
  
  for (let key in obj1) {
    console.log(key, obj1[key]);
  }
  
  //To exclude inherited properties, use hasOwnProperty:
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      console.log(key, obj1[key]);
    }
  }
  
  // Object.keys() : The Object.keys() method returns an array of an object's own enumerable property keys.
  
  const obj2 = { a: 1, b: 2, c: 3 };
  const keys2 = Object.keys(obj2);
  
  keys2.forEach((key) => {
    console.log(key, obj2[key]);
  });
  
  // Object.values() : The Object.values() method returns an array of an object's own enumerable property values.
  
  const obj3 = { a: 1, b: 2, c: 3 };
  const values = Object.values(obj3);
  
  values.forEach((value) => {
    console.log(value);
  });
  
  // Object.entries() : The Object.entries() method returns an array of the object's own enumerable property [key, value] pairs.
  
  const obj4 = { a: 1, b: 2, c: 3 };
  const entries = Object.entries(obj4);
  
  entries.forEach(([key, value]) => {
    console.log(key, value);
  });
  
  // for...of : 
  
  const obj5 = { a: 1, b: 2, c: 3 };
  
  for (const key of Object.keys(obj5)) {
    console.log(key, obj5[key]);
  }
  
  
  
  // Deep copy and shallow copy of arrays and objects
  
  // Shallow Copy : A shallow copy duplicates only the top-level properties of an object or array. If the original object contains nested objects or arrays, the nested structures are still shared references between the original and the copied data. Modifying a nested object or array will affect both the original and the copy.
  
  const originalArray = [1, 2, [3, 4]];
  const shallowCopy = originalArray.slice();
  
  shallowCopy[2][0] = 99; 
  console.log("Original: ",originalArray); 
  console.log("Shallow copy: ", shallowCopy);
  
  //Objects:
  const originalObject = { a: 1, b: { c: 2 } };
  const shallowCopy2 = Object.assign({}, originalObject);
  
  shallowCopy2.b.c = 99;
  console.log(originalObject);
  console.log(shallowCopy2);
  
  
  // Deep Copy : A deep copy duplicates all levels of an object or array, including nested objects and arrays. Changes to nested structures in the copy do not affect the original.
  const originalObject2 = { a: 1, b: { c: 2 } };
  const deepCopy = JSON.parse(JSON.stringify(originalObject2));
  
  deepCopy.b.c = 99;
  console.log(originalObject2);
  console.log(deepCopy);
  
  // Array methods: filter, map, reduce, forEach, with differences and use cases call, apply, and bind methods
  
  //Filter
  const num = [1,2,3,4,5,6];
  const evenNumbers = num.filter((n)=>n%2===0);
  console.log("Even Numbers",evenNumbers);
  
  //Map
  const square = num.map((n)=>n*n);
  console.log("Square: ", square);
  
  //Reduce
  const summation = num.reduce((a,n)=>a+n, 0);
  console.log("Sum: ",summation);
  
  //forEach
  num.forEach((n)=>{console.log(`Double of ${n}: `,n*2)})
  
  // Day 4:
  // Topic : Different ways to use JavaScript in HTML
  // - https://code-boxx.com/javascript-in-html/
  // rest of day 4 tasks in 'index.html' file and 'todo list' folder
  
  //Day 5:

  // Topic : Library vs. Framework: Understand the difference between a library and a framework
  // - https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/

  // Topic : CDNs and their Usage: How to use CDN links to import JavaScript libraries
  // - https://www.baeldung.com/cs/cdn

  //Topic : Cross-Origin Resource Sharing (CORS): What it is and why it matters
  // - https://medium.com/requestly/what-is-cors-and-why-do-you-need-it-9e518c00320f

  // Topic : Introduction to NPM, NVM and NPX and Install them on system
  // - https://dev.to/bilalniaz15/what-is-npm-npx-nvm-and-yarn-hpl

