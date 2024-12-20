import React from 'react'

function Advance() {
  return (
    <>
        <h1 className='font-bold text-center p-5 md:text-4xl text-2xl'>Advance JavaScript Interview Questions</h1>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>1. What are arrow functions in ES6, and how are they different from regular functions?</h2>
            <div className='space-y-3'>
                <p>Arrow functions, introduced in ES6 (ECMAScript 2015), are a more concise way to write functions in JavaScript. They offer a streamlined syntax and several differences from regular (traditional) function expressions. Here's a detailed explanation:</p>
                <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Feature</th>
                            <th className="px-4 py-2 border border-gray-300">	Regular Function</th>
                            <th className="px-4 py-2 border border-gray-300">Arrow Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">this binding</td>
                            <td className="px-4 py-2 border border-gray-300">Depends on how the function is called (dynamic)</td>
                            <td className="px-4 py-2 border border-gray-300">Lexical binding (inherits from outer scope)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Can be used as a constructor</td>
                            <td className="px-4 py-2 border border-gray-300">Yes</td>
                            <td className="px-4 py-2 border border-gray-300">No</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">arguments object</td>
                            <td className="px-4 py-2 border border-gray-300">Available</td>
                            <td className="px-4 py-2 border border-gray-300">Not available (use rest parameters)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">super keyword</td>
                            <td className="px-4 py-2 border border-gray-300">Available in classes</td>
                            <td className="px-4 py-2 border border-gray-300">	Not available</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Syntax</td>
                            <td className="px-4 py-2 border border-gray-300">More verbose, requires return if not implicit</td>
                            <td className="px-4 py-2 border border-gray-300">Concise, implicit return for single expressions</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Use as object method</td>
                            <td className="px-4 py-2 border border-gray-300">Works as expected</td>
                            <td className="px-4 py-2 border border-gray-300">Behaves differently (doesn't bind this correctly)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>2. What is destructuring assignment in ES6, and how does it work with arrays and objects? Write a function that takes an object with properties and logs each property individually.</h2>
            <div className='space-y-2'>
                <p>Destructuring assignment is a feature introduced in ES6 that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a more concise and readable syntax compared to manually accessing properties or array elements.</p>
                <div className='space-y-2'>
                    <div>
                        <h3 className='font-bold'>1. Destructuring with Arrays</h3>
                        <p className='px-5'>When you destructure an array, the values are unpacked based on their position (index) in the array.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>2. Destructuring with Objects</h3>
                        <p className='px-5'>When destructuring an object, the variable names must match the property names of the object.</p>
                    </div>
                </div>
                <h3 className='text-lg font-bold'>Project</h3>
                <div className='flex items-center justify-center'>
                    <img className='object-contain' src="Logproperty.png" alt="" />
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>3. Explain let, const, and var keywords. When should you use each?</h2>
            <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Feature</th>
                            <th className="px-4 py-2 border border-gray-300">var</th>
                            <th className="px-4 py-2 border border-gray-300">let</th>
                            <th className="px-4 py-2 border border-gray-300">const</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Scope</td>
                            <td className="px-4 py-2 border border-gray-300">	Function or global scope</td>
                            <td className="px-4 py-2 border border-gray-300">Block scope</td>
                            <td className="px-4 py-2 border border-gray-300">Block scope</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Hoisting</td>
                            <td className="px-4 py-2 border border-gray-300">Hoisted (initialized as undefined)</td>
                            <td className="px-4 py-2 border border-gray-300">Hoisted (not initialized)</td>
                            <td className="px-4 py-2 border border-gray-300">Hoisted (not initialized)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Reassignable</td>
                            <td className="px-4 py-2 border border-gray-300">Yes</td>
                            <td className="px-4 py-2 border border-gray-300">Yes</td>
                            <td className="px-4 py-2 border border-gray-300">No (constant reference)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Redeclarable</td>
                            <td className="px-4 py-2 border border-gray-300">Yes (in the same scope)</td>
                            <td className="px-4 py-2 border border-gray-300">No</td>
                            <td className="px-4 py-2 border border-gray-300">No</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Use Case</td>
                            <td className="px-4 py-2 border border-gray-300">Legacy code, function-scoped variables</td>
                            <td className="px-4 py-2 border border-gray-300">Variables that can be reassigned</td>
                            <td className="px-4 py-2 border border-gray-300">Constants or variables that should not be reassigned</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>4. What is the spread operator, and how can it be used with arrays and objects? Project: Merge two arrays using the spread operator.</h2>
            <div className='space-y-2'>
                <p>The spread operator (...) is a feature introduced in ES6 (ECMAScript 2015) that allows you to expand or "spread" elements of an iterable (like an array or object) into individual elements or properties.</p>
                <div className='space-y-2'>
                    <div className='px-4'>
                        <h3 className='font-bold'>1. Using Spread Operator with Arrays</h3>
                        <p className='px-4'>Create a shallow copy of an array. Merge arrays by spreading the elements into a new array.</p>
                    </div>
                    <div className='px-4'>
                        <h3 className='font-bold'>2. Using Spread Operator with Objects</h3>
                        <p className='px-4'>Create a shallow copy of an object. Merge multiple objects by spreading their properties into a new object.</p>
                    </div>
                </div>
                <div className='space-y-3'>
                    <h3 className='font-bold text-lg text-blue-700'>Project: Merge Two Arrays Using the Spread Operator</h3>
                    <div>
                        <img src="Merge.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>5. How does template literals work in ES6, and how does it make string interpolation easier?</h2>
            <div>
                <p>Template literals in ES6 (ECMAScript 2015) provide a more powerful and flexible way to work with strings in JavaScript. They make string interpolation (inserting variables or expressions inside strings) much easier compared to traditional string concatenation. Template literals are a feature of ES6 that provide an easier and more flexible way to work with strings. They allow string interpolation, making it simple to embed variables and expressions within strings using ${}. You can create multiline strings without worrying about escape characters. Tagged template literals enable you to define custom string processing logic.</p>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>6. What are default parameters in ES6, and how do they improve function flexibility?</h2>
            <div className='space-y-2'>
                <p>Default parameters in ES6 (ECMAScript 2015) allow you to assign default values to function parameters. This feature helps to make functions more flexible and prevents issues with undefined or missing parameters when calling a function.</p>
                <div className='space-y-1'>
                    <h3 className='font-bold text-lg'>How Default Parameters Improve Function Flexibility</h3>
                    <div className='px-4'>
                        <p>1. Without default parameters, if a function is called without an argument, the parameter will be undefined. This can lead to unintended behavior or errors. Default parameters provide a clean way to handle missing arguments.</p>
                        <p>2. Default parameters eliminate the need for additional logic inside the function to handle missing or undefined arguments. This leads to more readable and concise code.</p>
                        <p>3. Default parameters allow you to easily define functions that have optional parameters. For example, you can set the default value for an argument if it's not passed in, avoiding the need to check for null, undefined, or false.</p>
                        <p>4. In languages like Java, function overloading is a common way to define functions with different numbers of parameters. In JavaScript, this is typically handled using default parameters, which lets you define one function that can handle different argument counts.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>7. Explain what Map and Set are in ES6 and how they differ from objects and arrays. Project: Create a simple dictionary with Map to store key-value pairs.</h2>
            <div className='space-y-3'>
                <div>
                    <h3 className='font-bold text-lg'>Map in ES6</h3>
                    <p>A Map is a collection of key-value pairs, where each key can be of any data type (primitive values or objects), and keys can maintain the insertion order. This makes Map more flexible than objects when it comes to using complex types as keys.</p>
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Set in ES6</h3>
                    <p>A Set is a collection of unique values. It only stores values, not key-value pairs, and it automatically eliminates any duplicate values.</p>
                </div>
                <h3 className='font-bold text-lg'>Differences Between Map, Set, Objects, and Arrays</h3>
                <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Feature</th>
                            <th className="px-4 py-2 border border-gray-300">Map</th>
                            <th className="px-4 py-2 border border-gray-300">Set</th>
                            <th className="px-4 py-2 border border-gray-300">Object</th>
                            <th className="px-4 py-2 border border-gray-300">Array</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Key/Value pairs</td>
                            <td className="px-4 py-2 border border-gray-300">Stores key-value pairs</td>
                            <td className="px-4 py-2 border border-gray-300">Stores unique values</td>
                            <td className="px-4 py-2 border border-gray-300">Stores key-value pairs</td>
                            <td className="px-4 py-2 border border-gray-300">Stores indexed values (no key-value)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Key type</td>
                            <td className="px-4 py-2 border border-gray-300">	Can be any type (primitive or object)</td>
                            <td className="px-4 py-2 border border-gray-300">Values can be any type (but unique)</td>
                            <td className="px-4 py-2 border border-gray-300">Keys are always strings or Symbols</td>
                            <td className="px-4 py-2 border border-gray-300">ndexes are always numbers (integers)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Order</td>
                            <td className="px-4 py-2 border border-gray-300">	Insertion order is preserved</td>
                            <td className="px-4 py-2 border border-gray-300">Insertion order is preserved</td>
                            <td className="px-4 py-2 border border-gray-300">No order guarantee (can be unordered)</td>
                            <td className="px-4 py-2 border border-gray-300">Order is preserved (indexed from 0 onward)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Size</td>
                            <td className="px-4 py-2 border border-gray-300">.size property</td>
                            <td className="px-4 py-2 border border-gray-300">.size property</td>
                            <td className="px-4 py-2 border border-gray-300">.length property (for arrays)</td>
                            <td className="px-4 py-2 border border-gray-300">.length property</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='space-y-3'>
                <h2 className='font-bold text-lg'>Project</h2>
                <div className='flex items-center justify-center'>
                    <img className='object-contain' src="Dicton.png" alt="" />
                </div>
            </div>
                
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>8. What is the purpose of the for...of loop, and how is it different from for...in?</h2>
            <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Feature</th>
                            <th className="px-4 py-2 border border-gray-300">	for...of</th>
                            <th className="px-4 py-2 border border-gray-300">for...in</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Iteration Over</td>
                            <td className="px-4 py-2 border border-gray-300">	Values of iterable objects (arrays, strings, etc.)</td>
                            <td className="px-4 py-2 border border-gray-300">	Keys (or property names) of objects, or indices of arrays</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Recommended For</td>
                            <td className="px-4 py-2 border border-gray-300">Iterating over values (arrays, strings, maps, sets, etc.)</td>
                            <td className="px-4 py-2 border border-gray-300">Iterating over object properties or array indices</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Iterates Over</td>
                            <td className="px-4 py-2 border border-gray-300">	Actual values (elements)</td>
                            <td className="px-4 py-2 border border-gray-300">	Keys (property names or indices as strings)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Example Use Case</td>
                            <td className="px-4 py-2 border border-gray-300">Iterating over elements in an array or characters in a string</td>
                            <td className="px-4 py-2 border border-gray-300">Iterating over properties of an object</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Use With Arrays</td>
                            <td className="px-4 py-2 border border-gray-300">Recommended (iterates over values)</td>
                            <td className="px-4 py-2 border border-gray-300">Not recommended (iterates over indices)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Output Type</td>
                            <td className="px-4 py-2 border border-gray-300">Value of each element in the iterable</td>
                            <td className="px-4 py-2 border border-gray-300">Key (or index) of each property in the object</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>9. Explain the concept of Promise in JavaScript. How do you use .then() and .catch()? Project: Create a promise that resolves after 2 seconds and logs a message.</h2>
            <div className='space-y-3'>
                <p>A Promise is a special JavaScript object that represents the eventual completion or failure of an asynchronous operation and its resulting value. A Promise allows you to attach callbacks that will be executed once the asynchronous operation completes, either successfully or with an error.</p>
                <div className='space-y-2'>
                    <h3 className='font-bold text-lg'>Using .then() and .catch()</h3>
                    <div className='px-5'>
                        <p>1. .then() is used to handle a fulfilled promise (success case).</p>
                        <p>2. .catch() is used to handle a rejected promise (error case).</p>
                    </div>
                    <div className='space-y-3'>
                        <h3 className='font-bold text-lg'>Project: Create a Promise that Resolves After 2 Seconds</h3>
                        <div className='flex items-center justify-center'>
                            <img className='object-contain' src="Promise.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>10. What is async/await, and how does it work with Promises?</h2>
            <div className='space-y-2'>
                <p>async/await is a syntax in JavaScript that simplifies working with asynchronous code, making it more readable and easier to manage. It is built on top of Promises and allows you to write asynchronous code that looks synchronous.</p>
                <div>
                    <h3 className='font-bold text-lg'>Using async/await with Promises</h3>
                    <div className='px-4'>
                        <p>1. fetch(): Returns a Promise that resolves to a Response object.</p>
                        <p>2. await fetch(): Pauses the function until the Promise resolves.</p>
                        <p>3. await response.json(): Extracts JSON from the response.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>11. What is the DOM, and how does JavaScript interact with it?</h2>
            <div className='space-y-2'>
                <p>The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects, where each node corresponds to a part of the document (e.g., elements, attributes, text). Using the DOM, developers can programmatically access, manipulate, and interact with a web page.</p>
                <div>
                    <h3 className='font-bold text-lg'>How JavaScript Interacts with the DOM</h3>
                    <div className='px-5'>
                        <p>1. JavaScript can select DOM elements using various methods(document.getElementById, document.querySelector)</p>
                        <p>2. JavaScript can change the content of DOM elements using textContent, innerHTML </p>
                        <p>JavaScript can update or add attributes to elements</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>12. Explain how to select elements in the DOM using methods like getElementById, querySelector, and querySelectorAll. Project: Create a webpage with a button that changes the color of a div when clicked.</h2>
            <div className='space-y-2'>
                <div>
                    <h3 className='font-bold'>1. getElementById</h3>
                    <p className='px-4'>Selects a single element by its id. Returns the first element with the matching id (if it exists) or null if not found. Best for selecting unique elements.</p>
                </div>
                <div>
                    <h3 className='font-bold'>2. querySelector</h3>
                    <p className='px-4'>Selects the first element that matches a CSS selector. Can use any valid CSS selector (e.g., #id, .class, tag).</p>
                </div>
                <div>
                    <h3 className='font-bold'>3. querySelectorAll</h3>
                    <p className='px-4'>Selects all elements that match a CSS selector. Returns a NodeList, which is array-like and can be iterated over.</p>
                </div>
                <div className='space-y-3'>
                    <h3 className='font-bold text-lg'>Project: Change the Color of a div on Button Click</h3>
                    <div className='flex items-center justify-center'>
                        <img className='object-contain' src="ButtonJS.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>13. How do event listeners work in JavaScript? Explain addEventListener.</h2>
            <div className='space-y-2'>
                <p>An event listener is a mechanism in JavaScript that allows you to "listen" for specific user interactions or browser events on a DOM element and execute code in response to those events. Events can include user actions (e.g., clicks, key presses, mouse movements) or system-generated events (e.g., page load, resize).</p>
                <div>
                    <h3 className='font-bold text-lg'>How addEventListener Works</h3>
                    <div className='px-5'>
                        <p>1. Event Type: The name of the event to listen for (e.g., "click", "mouseover", "keydown").</p>
                        <p>2. Callback Function: The function that will execute when the event is triggered.</p>
                        <p>3. Options (Optional): Additional settings for the event listener.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>14. What is event delegation, and why is it useful? Project: Create a list where clicking on each list item logs its content. Use event delegation.</h2>
            <div className='space-y-2'>
                <p>Event delegation is a technique that leverages event propagation (bubbling phase) to handle events more efficiently. Instead of adding event listeners to multiple child elements, you add a single event listener to their common parent. When an event occurs on a child, it "bubbles" up to the parent, allowing the parent to handle the event for all its children.</p>
                <div>
                    <h3 className='font-bold'>Why Use Event Delegation?</h3>
                    <div className='px-5'>
                        <p>1. Reduces the number of event listeners, especially for dynamic or large lists of elements.</p>
                        <p>2. Handles events for dynamically added child elements without requiring additional listeners.</p>
                        <p>3. Centralizes event handling logic in one place.</p>
                    </div>
                </div>
                <div className='space-y-3'>
                    <h3 className='font-bold text-lg'>Create a list where clicking on each list item logs its content. Use event delegation.</h3>
                    <div className='flex items-center justify-center'>
                        <img className='object-contain' src="Event.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>15. What is the difference between innerHTML, textContent, and innerText?</h2>
            <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Property</th>
                            <th className="px-4 py-2 border border-gray-300">innerHTML</th>
                            <th className="px-4 py-2 border border-gray-300">	textContent</th>
                            <th className="px-4 py-2 border border-gray-300">innerText</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Purpose</td>
                            <td className="px-4 py-2 border border-gray-300">Get or set HTML content (including tags)</td>
                            <td className="px-4 py-2 border border-gray-300">Get or set plain text content (no HTML tags)</td>
                            <td className="px-4 py-2 border border-gray-300">Get or set rendered text (considering visibility and CSS)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Performance</td>
                            <td className="px-4 py-2 border border-gray-300">Slightly slower (due to parsing HTML)</td>
                            <td className="px-4 py-2 border border-gray-300">Faster (no HTML parsing)</td>
                            <td className="px-4 py-2 border border-gray-300">Slower (due to style calculations and reflow)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">HTML Tags</td>
                            <td className="px-4 py-2 border border-gray-300">Includes HTML tags</td>
                            <td className="px-4 py-2 border border-gray-300">Strips out HTML tags</td>
                            <td className="px-4 py-2 border border-gray-300">Strips out HTML tags but respects CSS styling (like hidden text)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Use Case</td>
                            <td className="px-4 py-2 border border-gray-300">When you need to retrieve or set HTML</td>
                            <td className="px-4 py-2 border border-gray-300">When you need plain text (no HTML)</td>
                            <td className="px-4 py-2 border border-gray-300">When working with visible text, considering CSS</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>16. Explain how you can manipulate CSS styles of an element using JavaScript.</h2>
            <div>
                <p>JavaScript provides multiple ways to manipulate CSS styles of elements in the DOM. This allows you to dynamically change the appearance of elements based on user interaction or other logic. Use classList and CSS classes for better maintainability instead of inline styles.  Use CSS variables for themes or global changes. Direct style manipulations can override external styles, making debugging harder. Combine dynamic styles with event delegation for efficiency.</p>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>17. How do you traverse the DOM? Explain parentNode, firstChild, lastChild, etc.</h2>
            <div className='space-y-3'>
                <p>DOM traversal refers to navigating through the nodes of a document's structure. JavaScript provides various properties and methods to traverse the DOM and manipulate elements. DOM traversal properties like parentNode, children, and siblings allow you to navigate and manipulate elements dynamically. Understanding these properties enables efficient interaction with the DOM to build interactive web applications.</p>
                <div>
                    <div>
                        <h3 className='font-bold'>1. parentNode</h3>
                        <p className='px-4'>Refers to the parent node of the current node. Returns null for the root node (document or html in most cases).</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>2. firstChild</h3>
                        <p className='px-4'>Refers to the first child node of the element (can be an element, text, or comment).</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>3. lastChild</h3>
                        <p className='px-4'>Refers to the last child node of the element (can be an element, text, or comment).</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>18. What is the purpose of preventDefault() and stopPropagation() in event handling? Project: Create a form that prevents submission and logs a message instead.</h2>
            <div className='space-y-2'>
                <p>In JavaScript, both preventDefault() and stopPropagation() are methods used to control the behavior of events during the event lifecycle. They are especially useful when you want to manage how events behave or how they interact with other elements or event listeners.For preventDefault() it prevents the default behavior of an event from occurring. When you don't want the browser to perform its default action, such as submitting a form, following a link, or resetting a form and for stopPropagation() it stops the event from propagating (bubbling) to parent elements. When you want to prevent an event from being passed up the DOM tree to other event listeners attached to parent elements (e.g., click event bubbling up to document).</p>
            </div>
            <div className='space-y-3'>
                <h3 className='font-bold text-lg mt-2'>Project: Form that Prevents Submission and Logs a Message Instead</h3>
                <div className='flex items-center justify-center'>
                    <img className='object-contain'  src="Submission.png" alt="" />
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>19. What is the Browser Object Model (BOM) in JavaScript?</h2>
            <div>
                <p>The Browser Object Model (BOM) is a collection of objects that allow you to interact with the browser environment in JavaScript. The BOM provides a way for JavaScript to interact with and manipulate the browser window and its components, such as the browser's history, location, document, and navigator.While the DOM (Document Object Model) is concerned with manipulating the content of the webpage, the BOM deals with interactions with the browser outside the webpage itself. The Browser Object Model (BOM) provides JavaScript with a way to interact with the browser itself, offering functionality such as navigating through the browser’s history, manipulating the URL, and accessing system information like screen size and browser details. Understanding the BOM is essential for building dynamic and interactive web applications that provide seamless user experiences.</p>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>20. How does window differ from document?</h2>
            <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Aspect</th>
                            <th className="px-4 py-2 border border-gray-300">window</th>
                            <th className="px-4 py-2 border border-gray-300">document</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Represents</td>
                            <td className="px-4 py-2 border border-gray-300">The browser window/tab itself.</td>
                            <td className="px-4 py-2 border border-gray-300">The content (HTML) of the web page inside the window.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Scope</td>
                            <td className="px-4 py-2 border border-gray-300">Global object for all browser-related features and JavaScript execution context.</td>
                            <td className="px-4 py-2 border border-gray-300">Provides access to and manipulation of the page's DOM structure (HTML elements).</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Browser Features</td>
                            <td className="px-4 py-2 border border-gray-300">Provides features like localStorage, sessionStorage, alert(), setTimeout(), etc.</td>
                            <td className="px-4 py-2 border border-gray-300">Provides methods for manipulating the DOM, such as getElementById(), querySelector(), etc.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Properties/Methods</td>
                            <td className="px-4 py-2 border border-gray-300">Includes browser-level information like window.innerWidth, window.location, window.alert().</td>
                            <td className="px-4 py-2 border border-gray-300">Includes page-level methods like document.querySelector(), document.createElement().</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>21. Explain how localStorage, sessionStorage, and cookies work and their differences. Project: Store and retrieve user preferences (like theme) using localStorage.</h2>
            <div className='space-y-3'>
            <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Feature</th>
                            <th className="px-4 py-2 border border-gray-300">	localStorage</th>
                            <th className="px-4 py-2 border border-gray-300">	sessionStorage</th>
                            <th className="px-4 py-2 border border-gray-300">Cookies</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Lifetime</td>
                            <td className="px-4 py-2 border border-gray-300">	Until manually deleted by user or app</td>
                            <td className="px-4 py-2 border border-gray-300">Only for the duration of the session (until tab or browser is closed)</td>
                            <td className="px-4 py-2 border border-gray-300">Configurable (can expire, or session)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Storage Size</td>
                            <td className="px-4 py-2 border border-gray-300">5-10 MB</td>
                            <td className="px-4 py-2 border border-gray-300">	5 MB</td>
                            <td className="px-4 py-2 border border-gray-300">4 KB per cookie</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Scope</td>
                            <td className="px-4 py-2 border border-gray-300">Accessible across tabs/windows</td>
                            <td className="px-4 py-2 border border-gray-300">Accessible only in the same tab</td>
                            <td className="px-4 py-2 border border-gray-300">Sent with every HTTP request to server</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Accessibility</td>
                            <td className="px-4 py-2 border border-gray-300">JavaScript only (client-side)</td>
                            <td className="px-4 py-2 border border-gray-300">JavaScript only (client-side)</td>
                            <td className="px-4 py-2 border border-gray-300">JavaScript and HTTP requests</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='space-y-3'>
                <h3 className='font-bold text-lg'>Store and Retrieve User Preferences (Theme) Using localStorage</h3>
                <div className='flex items-center justify-center'>
                    <img className='object-contain' src="Theme.png" alt="" />
                </div>
            </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>22. What is the purpose of the navigator object, and what properties does it have?</h2>
            <div>
                <p>The navigator object in JavaScript is part of the Browser Object Model (BOM) and provides information about the web browser and the user's environment. It allows developers to access details about the browser's capabilities, the user's device, and the user's system settings. This object can be used for various purposes, such as detecting the user's browser, checking for online status, or adjusting the application's behavior based on the user's platform. The navigator object is an essential part of the Browser Object Model (BOM), providing access to various properties and methods that enable developers to interact with the browser and retrieve information about the user's environment. It plays a key role in customizing web applications based on the browser type, device capabilities, user location, and connection status.</p>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>23. How do window.open and window.close methods work in JavaScript?</h2>
            <div>
                <p>The window.open() and window.close() methods are part of the Window interface in the Browser Object Model (BOM). These methods are used to control browser windows and tabs. window.open() is used to open new browser windows or tabs with specific URLs, settings, and options, and is often used for opening new pages in a controlled way. window.close() is used to close windows or tabs, but it can only close windows that were opened by the same script.</p>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>24. Explain how to get the viewport width and height of a browser window using JavaScript. Project: Create a function that logs the window’s size whenever it’s resized.</h2>
            <div className='space-y-3'>
                <p>In JavaScript, you can determine the viewport width and height (the visible area of the browser window) using the window.innerWidth and window.innerHeight properties: window.innerWidth: Returns the width of the viewport in pixels, including scrollbars. window.innerHeight: Returns the height of the viewport in pixels, including scrollbars.</p>
                <div className='space-y-3'>
                    <h3 className='font-bold text-lg'>Project: Create a function that logs the window’s size whenever it’s resized.</h3>
                    <div className='flex items-center justify-center'>
                        <img className='object-contain' src="Window.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>25. What is the purpose of the setTimeout and setInterval functions? Project: Create a clock that updates every second using setInterval.</h2>
            <div className='space-y-2'>
                <div>
                    <h3 className='font-bold text-lg'>Purpose of setTimeout and setInterval</h3>
                    <div className='px-5'>
                        <p>setTimeout: Executes a specified function once after a given delay (in milliseconds). Useful for scheduling a one-time operation after a delay.</p>
                        <p>setInterval: Executes a specified function repeatedly at a fixed interval (in milliseconds). Useful for scheduling recurring operations.</p>
                    </div>
                </div>
                <div className='space-y-3'>
                    <h3 className='font-bold text-lg'>Project: Create a Clock that Updates Every Second</h3>
                    <div className='flex items-center justify-center'>
                        <img className='object-contain' src="Time.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>26. How can you detect if a user is online or offline using the BOM?</h2>
            <div className='space-y-3'>
                <p>You can detect whether a user is online or offline in JavaScript by using the Browser Object Model (BOM), specifically the navigator.onLine property and the online and offline events.</p>
                <div className='space-y-2'>
                    <h3 className='font-bold'>Example: Check Online Status</h3>
                    <div className='flex items-center justify-center'>
                        <img src="Online.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>27. What is the Fetch API, and how does it work with Promises? Project: Fetch data from a public API (e.g., JSONPlaceholder) and display it on the page.</h2>
            <div className='space-y-3'>
                <p>The Fetch API is a modern JavaScript API used to make HTTP requests, such as retrieving data from a server, submitting data, or interacting with remote resources. It returns a Promise that resolves to the Response object representing the response to the request. The Fetch API is more flexible and easier to work with compared to older APIs like XMLHttpRequest.</p>
                <div>
                    <h3 className='font-bold'>How Does the Fetch API Work with Promises?</h3>
                    <p>The Fetch API works asynchronously using Promises. When you use fetch(), it immediately returns a Promise that resolves to the Response object representing the outcome of the request. You can use .then() to handle the successful response and .catch() to handle any errors.</p>
                </div>
                <div className='space-y-3'>
                    <h3 className='font-bold text-lg'>Project: Fetch Data from a Public API and Display It</h3>
                    <div className='flex items-center justify-center'>
                        <img className='object-contain' src="Fetch.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>28. How does XMLHttpRequest differ from the Fetch API?</h2>
            <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Feature</th>
                            <th className="px-4 py-2 border border-gray-300">XMLHttpRequest</th>
                            <th className="px-4 py-2 border border-gray-300">Fetch API</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Syntax</td>
                            <td className="px-4 py-2 border border-gray-300">Verbose and callback-based</td>
                            <td className="px-4 py-2 border border-gray-300">Modern, Promise-based, supports async/await</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Return Value</td>
                            <td className="px-4 py-2 border border-gray-300">XMLHttpRequest object, raw data</td>
                            <td className="px-4 py-2 border border-gray-300">Promise that resolves to a Response object</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Error Handling</td>
                            <td className="px-4 py-2 border border-gray-300">Manual error handling (onerror, onreadystatechange)</td>
                            <td className="px-4 py-2 border border-gray-300">catch for network errors, manual check for HTTP errors</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Request Configuration</td>
                            <td className="px-4 py-2 border border-gray-300">Uses open(), setRequestHeader(), send()</td>
                            <td className="px-4 py-2 border border-gray-300">Simpler with fetch() and supports modern options</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Request Cancellation</td>
                            <td className="px-4 py-2 border border-gray-300">Can use xhr.abort()</td>
                            <td className="px-4 py-2 border border-gray-300">Uses AbortController for cancellation</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Support for Streams</td>
                            <td className="px-4 py-2 border border-gray-300">No</td>
                            <td className="px-4 py-2 border border-gray-300">Yes, supports streaming data</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>29. Explain what JSON is and how it’s used in JavaScript.</h2>
            <div className='space-y-3'>
                <p>JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON is often used to transmit data between a server and a client (like in web applications) because it is language-independent, but it is based on JavaScript object syntax.</p>
                <div className='space-y-1'>
                    <h3 className='font-bold text-lg'>Used in JavaScript</h3>
                    <p>JSON is a text-based data format used for representing data objects in JavaScript. It is used for exchanging data between the client and the server, and for storing data locally in web applications. You can use JSON.parse() to convert a JSON string into a JavaScript object and JSON.stringify() to convert a JavaScript object into a JSON string. JSON is widely supported across all modern programming languages, making it a versatile and popular choice for data exchange.</p>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>30. How do you parse JSON data in JavaScript, and how do you stringify JavaScript objects? Project: Create a function that converts an object to JSON and back to an object.</h2>
            <div className='space-y-3'>
                <div>
                    <h3 className='font-semibold'>1. Parsing JSON Data</h3>
                    <p className='px-4'>JSON.parse() is used to parse a JSON string into a JavaScript object.</p>
                </div>
                <div>
                    <h3 className='font-semibold'>2. Stringifying JavaScript Objects</h3>
                    <p className='px-4'>JSON.stringify() is used to convert a JavaScript object into a JSON string.</p>
                </div>
                <div className='space-y-3'>
                    <h3 className='font-bold text-lg'>Project: Convert Object to JSON and Back to an Object</h3>
                    <div className='flex items-center justify-center'>
                        <img src="JSON.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>31. What is CORS, and why do we need it when making API requests?</h2>
            <div className='space-y-3'>
                <p>CORS (Cross-Origin Resource Sharing) is a security feature implemented by browsers to control how resources (like APIs, images, or scripts) hosted on one domain can be requested by a web page from a different domain (a different origin). An origin is defined as the combination of the protocol (HTTP/HTTPS), domain (or IP address), and port.</p>
                <div>
                    <h3 className='font-bold text-lg'>Why Do We Need CORS?</h3>
                    <div className='px-5'>
                        <p>1. By default, web browsers restrict web pages from making requests to a different origin. This helps prevent cross-site request forgery (CSRF) attacks and protects user data from malicious websites.</p>
                        <p>2. Many modern web applications make requests to APIs hosted on different domains or subdomains (e.g., a React app hosted on https://example.com making requests to an API hosted on https://api.example.com). CORS provides a safe mechanism for this kind of cross-origin communication, which is common in Single Page Applications (SPAs) and microservices architectures.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>32. Explain how the FormData API works and when you’d use it.</h2>
            <div className='space-y-3'>
                <div className='space-y-1'>
                    <h3 className='font-bold text-lg'>How the FormData API Works</h3>
                    <p>The FormData API allows you to create a new FormData object that can automatically collect data from HTML forms or allow you to manually append data to it. It is often used in combination with JavaScript's fetch() or XMLHttpRequest to send form data asynchronously without refreshing the page.</p>
                </div>
                <div>
                    <h3 className='font-bold text-lg'>When to Use the FormData API</h3>
                    <div className='px-5'>
                        <p>1. The FormData API is ideal for situations where you need to send form data, especially when the form contains files</p>
                        <p>2. When you want to append custom data (not just form data) to a FormData object, such as additional metadata or parameters that are not part of the form.</p>
                        <p>3. When the form contains file input fields (input type="file"), the FormData API makes it easy to collect file data and send it to a server as part of a multipart/form-data request.</p>
                        <p>4. When dealing with forms that have complex input types (e.g., files, text areas, checkboxes, or radio buttons), the FormData API simplifies the process of gathering all the data and sending it in one request.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>33. What is the purpose of the History API, and how do pushState and replaceState work? Project: Create a simple single-page navigation system with pushState.</h2>
            <div className='space-y-3'>
                <p>The History API allows web developers to manipulate the browser’s history stack, providing a way to manage the navigation state of a single-page application (SPA). With the History API, you can modify the browser's URL, track user navigation, and update the page content without reloading the page. This allows you to create more dynamic, fluid, and responsive web applications that feel more like native apps.</p>
                <div>
                    <h3 className='font-semibold'>1. replaceState()</h3>
                    <p className='px-4'>The replaceState() method is used when you want to update the current entry in the history stack without adding a new one. This can be useful for cases where you need to update the URL based on user actions, but don’t want to create a new history entry.</p>
                </div>
                <div>
                    <h3 className='font-semibold'>2. pushState()</h3>
                    <p className='px-4'>pushState(state, title, url) updates the browser’s URL without causing a page reload. In the example, when the user clicks a navigation link (e.g., "Home"), pushState() updates the URL to something like #home, but no page reload occurs. This allows the app to behave like a traditional multi-page website, but all within a single page.</p>
                </div>
                <h2 className='font-bold text-lg'>Project: Create a simple single-page navigation system with pushState.</h2>
                <div className='flex items-center justify-center'>
                    <img className='object-contain' src="Pushstate.png" alt="" />
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>34. How can you handle errors in API requests with try/catch blocks and the .catch() method?</h2>
            <div>
                <p>try/catch with async/await: Best for handling asynchronous errors in a more synchronous, readable manner. .catch() with Promises: Best for chaining promises and catching errors at the end of the chain. Both approaches are effective in handling errors like network failures, invalid responses, and exceptions in the API request process.</p>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>35. What are WebSockets, and how do they differ from HTTP requests?</h2>
            <div className='space-y-4'>
                <p>WebSockets are a protocol that enables full-duplex communication (i.e., two-way communication) over a single, long-lived connection between a client (e.g., a web browser) and a server. Unlike traditional HTTP requests, WebSockets allow real-time, bidirectional data transfer, meaning that both the client and server can send messages to each other independently at any time.</p>
                <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Feature</th>
                            <th className="px-4 py-2 border border-gray-300">WebSockets</th>
                            <th className="px-4 py-2 border border-gray-300">HTTP Requests</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Communication Model</td>
                            <td className="px-4 py-2 border border-gray-300">Full-duplex (two-way communication)</td>
                            <td className="px-4 py-2 border border-gray-300">Half-duplex (client sends a request, server responds)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Connection Type</td>
                            <td className="px-4 py-2 border border-gray-300">	Persistent, open connection</td>
                            <td className="px-4 py-2 border border-gray-300">Short-lived connection (request/response cycle)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Data Flow</td>
                            <td className="px-4 py-2 border border-gray-300">	Both client and server can send data at any time</td>
                            <td className="px-4 py-2 border border-gray-300">Client sends request, server sends response</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Overhead</td>
                            <td className="px-4 py-2 border border-gray-300">Low overhead (only one connection for long-term use)</td>
                            <td className="px-4 py-2 border border-gray-300">Higher overhead (new connection per request)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Real-Time Data</td>
                            <td className="px-4 py-2 border border-gray-300">Best for real-time communication (live updates, chats)</td>
                            <td className="px-4 py-2 border border-gray-300">Not designed for real-time, limited to request/response</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>36. Explain the basics of the Service Worker API and its use in creating progressive web apps (PWAs).</h2>
            <div className='space-y-2'>
                <h3 className='font-bold text-lg'>Basic Concepts of Service Workers</h3>
                <div className='px-5'>
                    <p>1. Life Cycle of a Service Worker A service worker has a well-defined life cycle</p>
                    <p>2. Service Worker Registration A service worker must be registered from the main thread (typically the web page) in order to start controlling the page and intercepting network requests.</p>
                    <p>3. Scope The scope of a service worker determines which URLs it can control. The scope is typically the directory in which the service worker script is located (and its subdirectories). A service worker can only control the pages within its scope.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Advance;