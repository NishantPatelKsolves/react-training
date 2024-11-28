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



  // REACT

  // Day 1
  // Topic : React Overview: Understanding the purpose and popularity of React in modern web development
  // - https://makersden.io/blog/understanding-react-js:-why-it-matters-in-web-development

  //Topic : Comparing React with Other Libraries and Frameworks: Key differences between React, Vue, Angular, and jQuery
 // - https://sd.blackball.lv/en/articles/read/19855-a-detailed-2024-comparison-angular-vs-react-vs-vuejs
 // - https://medium.com/@emiliebetterdevelopers/angular-vs-react-a-comprehensive-comparison-in-web-development-c12ac7571f02

  // Topic : React vs. ReactDOM: Understanding the role of ReactDOM in rendering React components to the DOM
  // - https://medium.com/@tanish_rajput/react-and-reactdom-the-dynamic-duo-behind-stunning-user-interfaces-3e83ca3d1468

  // Topic : Creating a React Application:
 // Using create-react-app and vite commands to quickly initialize projects
 // How to manually create a React application without using commands for a deeper understanding
 // - https://medium.com/@pxperfectmike/creating-a-react-application-with-vite-or-create-react-app-870d8f85d7cb
 // - https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html

 // Topic : Exploring the React File Structure:
 // Examining each file that comes with create-react-app and vite, such as manifest.xml, robots.txt
 // Understanding the importance of directories like public and src
 // - https://medium.com/@PavanCodeCraft/react-js-folder-structure-a-comprehensive-guide-f07d4d915e2c
 // - https://web.dev/articles/add-manifest-react
 // - https://medium.com/@sujeetive/mastering-robots-txt-f0b38ef9844b

 // Topic : Package Management in React:
 // Differences between package.json and package-lock.json
 // Key properties in package.json (e.g., scripts, version, dependencies, and author)
 // Understanding dependencies vs. devDependencies
 // Understanding the significance of versioning symbols (^ - caret and ~ - tilde) in package.json
// - https://blog.packagecloud.io/react-package-management-101/

// Topic : Bundlers and their Role:
// Introduction to bundlers like Webpack, Vite, and Parcel and why they are essential for bundling, code-splitting, and optimization
// Basics of Babel and its role in compiling modern JavaScript to be browser-compatible
// - https://medium.com/@krishnakeshri_30423/the-crucial-role-of-bundlers-in-react-development-bca6c67c1681
// - https://medium.com/@abrahamahn/understanding-the-role-of-babel-46220bcfe772

// Topi : React Core Concepts:
// Virtual DOM, Shadow DOM, and the Reconciliation process for efficient UI updates
// Task: Create a simple React application both using commands (create-react-app or vite) and manually to understand the basic structure and setup.
// - https://medium.com/duomly-blockchain-online-courses/shadow-dom-vs-virtual-dom-what-is-the-difference-f2611da536ab
// - https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
// - https://github.com/acdlite/react-fiber-architecture


// Day 2:

// Topic : React Elements and Rendering:
// Exploring the render, createElement, and createRoot methods in React
// Differences between React.createElement and JSX and the benefits of using JSX
// Behind the scenes of JSX: Understanding how JSX is compiled to JavaScript
// - https://react.dev/reference/react-dom/client/createRoot
// - https://medium.com/@juliaazt/react-js-deep-dive-1-createelement-and-jsx-runtime-63c75882f7b0
// - https://medium.com/@elyashanafilts/demystifying-jsx-understanding-how-it-works-behind-the-scenes-d89fdb2db640

// Topic : Class Components in React:
// Understanding the syntax and structure of Class Components in React
// Life Cycle Methods in Class Components:
// Mounting: constructor, componentDidMount
// Updating: componentDidUpdate
// Unmounting: componentWillUnmount
// - https://medium.com/@PavanCodeCraft/mastering-class-components-in-react-a-comprehensive-guide-c939a41affea
// - https://www.freecodecamp.org/news/react-component-lifecycle-methods/

// - Built apps using class components:
// 1. 'react-class-component' (fetches data from external API and keepd count of each request)and
// 2. 'react/timer-class-component' (Timer with start, pause, and reset function)

// Topic : State and Props:
// Introduction to State and Props and their differences
// Managing state within class components and passing props to child components
// - https://medium.com/@navneetskahlon/understanding-state-vs-props-in-react-a-comprehensive-guide-with-code-examples-e1ef236718a7

// Topic : Additional Class Component Features:
// Pure Components and their role in optimizing component re-renders
// Using defaultProps and propTypes to define default values and prop validation
// Error Boundaries: Catching and handling errors in class components to improve stability
// - https://medium.com/@suyesh.tiwari23/pure-components-in-react-accelerating-performance-in-your-application-63ac0aa73184

//Day 3

// Topic : Introduction to Functional Components: 
// Understanding the simplicity and performance benefits of functional components over class components
// - https://medium.com/@muchaijoseph/react-functional-components-8c6398ff8c15
// - https://blog.radialcode.com/category/web/class-vs-functional-components-in-react-a-comprehensive-comparison

// Topic : - Class vs. Functional Components:
// Key differences in syntax, lifecycle handling, and usage
// When to choose functional components over class components
// - https://medium.com/scalereal/class-components-vs-functional-components-in-reactjs-8d69595918be
// - https://medium.com/@PavanCodeCraft/understanding-react-lifecycle-methods-class-components-vs-functional-components-c36905acdb32
// - https://maxrozen.com/react-components-hooks-functions-vs-classes

// Topic : Introduction to React Hooks:
// useState: 
// Handling multiple state variables with useState
// Updating state in response to user events and changes
// useEffect:
// Understanding the purpose of useEffect for handling side effects
// Dependency Array: Controlling when useEffect runs (e.g., on mount, on state change, on unmount)
// Cleanup Functions: Using cleanup functions within useEffect to prevent memory leaks, especially with intervals, subscriptions, and event listeners
// - https://www.freecodecamp.org/news/introduction-to-react-hooks/

// - Built apps using function components:
// 1. 'react-function-component' (fetches data from external API and keepd count of each request)and
// 2. 'timer-function-component' (Timer with start, pause, and reset function) : utilizes useState and useEffect


// Day 4

//Topic : Overview of React Router Library:
// - https://ui.dev/react-router-tutorial
// Topic: Difference between BrowserRouter, HashRouter, and MemoryRouter and its uses
// - https://medium.com/front-end-weekly/choosing-a-router-in-react-apps-85ae72fe9d78

// Topic : Understanding Route, Switch, and Link:
// - https://ui.dev/react-router-tutorial

// Topic : Hooks Provided by the Library - useHistory, useLocation, useParams and useRouteMatch
// - https://medium.com/@vaishnavi_shelke/a-guide-to-react-router-hooks-94770b9948ac

// Topic : Redirects and Navigation
// - https://www.dhiwise.com/post/enhancing-navigation-with-redirects-in-react-route
// - https://refine.dev/blog/navigate-react-router-redirect/#lazy-loading-routes

// Topic : Nested Routing
// - https://ui.dev/react-router-nested-routes

// Topic : Route Protection, 404 Pages and Fallback Routes:
// - https://www.robinwieruch.de/react-router-private-routes/
// - https://ui.dev/react-router-handling-404-pages

// Topic : React Router v6 Features like Switch in favor of Routes.
// - https://www.geeksforgeeks.org/react-router-v5-vs-v6/


// Day 5 : 
// Topic : Explore Lazy Loading: Wrap components in <Suspense> for loading states.
// Topic : Explore Code Splitting: Use Webpack for automatic chunk generation.
// - https://web.dev/articles/code-splitting-suspense
// - https://loadforge.com/guides/leveraging-code-splitting-and-lazy-loading-in-react


// Topic : Understand useCallback: Ensure memoized functions update only with dependency changes.
// Topic : Understand useMemo: Optimize expensive computations in lists or derived data.
// Topic : Explore React.memo: Prevent re-renders of functional components with unchanged props.
// - https://blog.logrocket.com/react-usememo-vs-usecallback/
// - https://dev.to/vignesh_pugaz/difference-between-usecallback-usememo-and-react-memo-18i6
// - https://stackoverflow.com/questions/56910036/when-to-use-usecallback-usememo-and-useeffect

// Topic : Explore React Profiler: Identify performance bottlenecks and visualize render times.
// Topic : Understand Throttling and Debouncing: Optimize event handling to reduce excessive calls.
// Topic : Understand Batching State Updates: Reduce renders by batching state updates in handlers.
// Topic : Explore Dynamic Imports: Use React.lazy for lazy loading and show loading indicators.
// Topic : Understand Key Prop in Lists: Use unique keys to help React track list items.
// Topic : Explore Caching Mechanisms: Use SWR or React Query to minimize network requests.

// Week 3 :
// Day 1 :
// Topic : Overview of the React Context API: Understanding its purpose in managing global state, avoiding prop drilling, and enhancing component communication.
// Topic : Understanding Context Provider and Context Consumer: Exploring the roles of Provider and Consumer in sharing state across components.
// Topic : Creating a Context: Learning how to create a context using React.createContext(). Exploring the concepts of Provider and Consumer patterns in detail.
// - https://medium.com/@joaopaulocmarra/mastering-react-context-api-a-comprehensive-tutorial-for-front-end-developers-ed147491eec6

// Topic : Using Context in Functional Components: Exploring how to use the useContext hook to access context values, enabling simplified state management within components.
// - https://medium.com/@livajorge7/using-react-context-in-functional-components-a-complete-guide-with-best-practices-and-expert-f699881db23
/*
- Updating Context Values: Understanding how to create dynamic context values and update them using state management with useState for responsiveness.

- Using Multiple Context Providers: Learning how to nest multiple context providers for managing different states across various parts of the application effectively.

- Performance Considerations: Understanding best practices to prevent unnecessary re-renders when using context, ensuring optimal performance.

- Task: Refactor the BookStore App to implement the Context API and add a theme toggler for improved user experience."
*/

/**
 * Day 2:
 * 
 * Tiopics: 
 * - Overview of Redux: Understanding what Redux is, its purpose in state management, and key differences from the Context API, particularly in handling complex state.

   - Core Concepts of Redux: Familiarizing yourself with essential concepts such as:
   - Actions: Learning how to define actions and their types.
   - Reducers: Understanding how reducers manage state transitions based on actions.
   - Store: Exploring how the Redux store holds the application state and manages its updates.

   - Setting Up Redux:
   - Learning how to set up a Redux store using createStore.
   - Connecting the Redux store to a React application using react-redux and configuring the Provider.

   - Dispatching Actions:
   - Exploring how to create action creators and dispatch actions to modify state within the Redux store.
   - Understanding how to handle asynchronous actions using middleware.

   - Understanding the Redux Flow:
   - Studying the unidirectional data flow in Redux, where actions trigger reducers to update the store, and the store reflects changes in components.

   - Task:
   - Create a Recipe Management Application that allows users to add, edit, and delete recipes. Implement Redux to manage the state of recipes, including the ingredients and cooking instructions. Allow users to categorize recipes and filter by category, implementing a dynamic list that updates based on user input.

   Resources:
   - https://blog.logrocket.com/understanding-redux-tutorial-examples/
   - https://www.freecodecamp.org/news/what-is-redux-store-actions-reducers-explained/
   - https://www.youtube.com/watch?v=5yEG6GhoJBs
   - https://www.youtube.com/watch?v=DnRY5yG67u8
 */

   /**
    * Day 4:
    * Testing in React: Jest 
    * 
    * - Explore Testing Libraries: Understand the roles of popular testing libraries like Jest for unit testing and React Testing Library for component testing.
      - https://medium.com/simform-engineering/react-testing-library-vs-jest-2a204f521b97
      
      - Write Unit Tests for Functions: Learn how to write unit tests for utility functions, actions, and reducers using Jest's testing framework.
      - Test Components with React Testing Library: Explore how to test components by rendering them and asserting their behavior, focusing on queries like getByText, getByRole, and getByTestId.
      - Simulate User Interactions: Understand how to simulate user events (e.g., clicks, inputs) in tests using user-event library.
      - Mocking in Tests: Learn how to mock functions, modules, and API calls to isolate tests and improve reliability.
      - Testing Asynchronous Code: Understand how to test asynchronous actions and components that rely on promises or async functions.

      Task: Write comprehensive tests for the Bookstore and Recipe Management Application, ensuring all functionality (including async actions) is covered."
    */