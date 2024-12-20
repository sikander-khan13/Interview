import React from 'react'

function Javascript() {
  return (
    <>
        <h1 className='font-bold text-center p-5 md:text-4xl text-2xl'>JavaScript Interview Questions</h1>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>1. What are the different data types in JavaScript?</h2>
            <div className='space-y-2'>
                <p>JavaScript has several data types categorized into primitive types and non-primitive types (objects). Here's a breakdown:</p>
                <div>
                    <h2 className='font-bold text-lg'>Primitive Data Types</h2>
                    <div className='px-4'>
                        <h3 className='font-semibold'>1. String</h3>
                        <p className='px-4'>Represents textual data.</p>
                    </div>
                    <div className='px-4'>
                        <h3 className='font-semibold'>2. Number</h3>
                        <p className='px-4'>Represents both integer and floating-point numbers. Includes special values: Infinity, -Infinity, and NaN (Not-a-Number).</p>
                    </div>
                    <div className='px-4'>
                        <h3 className='font-semibold'>3. BigInt</h3>
                        <p className='px-4'>Used for very large integers that exceed the safe range of Number. Declared by appending n to the end of an integer.</p>
                    </div>
                    <div className='px-4'>
                        <h3 className='font-semibold'>4. Boolean</h3>
                        <p className='px-4'>Represents two values: true or false.</p>
                    </div>
                    <div className='px-4'>
                        <h3 className='font-semibold'>5. Undefined</h3>
                        <p className='px-4'>Represents a variable that has been declared but not assigned a value.</p>
                    </div>
                    <div className='px-4'>
                        <h3 className='font-semibold'>6. Null</h3>
                        <p className='px-4'>Represents an explicitly empty or non-existent value.</p>
                    </div>
                    <div className='px-4'>
                        <h3 className='font-semibold'>7. Symbol</h3>
                        <p className='px-4'>Represents a unique and immutable value, often used as object keys.</p>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-lg'>Non-Primitive Data Types</h2>
                    <div className='px-4'>
                        <h3 className='font-semibold'>1. object</h3>
                        <p className='px-4'>Represents a collection of key-value pairs or more complex entities.</p>
                    </div>
                    <div className='px-4'>
                        <h3 className='font-semibold'>2. Array</h3>
                        <p className='px-4'>A special type of object used to store ordered lists of values.</p>
                    </div>
                    <div className='px-4'>
                        <h3 className='font-semibold'>3. Function</h3>
                        <p className='px-4'>A callable object that can perform operations or return values.</p>
                    </div>
                    <div className='px-4'>
                        <h3 className='font-semibold'>4. Date</h3>
                        <p className='px-4'>An object representing dates and times.</p>
                    </div>
                    <div className='px-4'>
                        <h3 className='font-semibold'>5. Other built-in objects</h3>
                        <p className='px-4'>Examples: RegExp, Map, Set, WeakMap, WeakSet, etc.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>2. What is the difference between var, let, and const?</h2>
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
                            <td className="px-4 py-2 border border-gray-300">	Function-scoped</td>
                            <td className="px-4 py-2 border border-gray-300">	Block-scoped</td>
                            <td className="px-4 py-2 border border-gray-300">Block-scoped</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Hoisting</td>
                            <td className="px-4 py-2 border border-gray-300">	Hoisted (initialized to undefined)</td>
                            <td className="px-4 py-2 border border-gray-300">Hoisted (TDZ applies)</td>
                            <td className="px-4 py-2 border border-gray-300">Hoisted (TDZ applies)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Re-declaration</td>
                            <td className="px-4 py-2 border border-gray-300">Allowed</td>
                            <td className="px-4 py-2 border border-gray-300">Not allowed</td>
                            <td className="px-4 py-2 border border-gray-300">Not allowed</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Reassignment</td>
                            <td className="px-4 py-2 border border-gray-300">allowed</td>
                            <td className="px-4 py-2 border border-gray-300">allowed</td>
                            <td className="px-4 py-2 border border-gray-300">Not allowed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>3. Explain JavaScript's == vs. === operators.</h2>
            <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Feature</th>
                            <th className="px-4 py-2 border border-gray-300">== (Equality)</th>
                            <th className="px-4 py-2 border border-gray-300">=== (Strict Equality)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Type Conversion</td>
                            <td className="px-4 py-2 border border-gray-300">Yes (performs coercion)</td>
                            <td className="px-4 py-2 border border-gray-300">No</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Comparison Basis</td>
                            <td className="px-4 py-2 border border-gray-300">Value after conversion</td>
                            <td className="px-4 py-2 border border-gray-300">Value and type</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Use Case</td>
                            <td className="px-4 py-2 border border-gray-300">Loose equality when types don't matter</td>
                            <td className="px-4 py-2 border border-gray-300">Strict equality for precise comparison</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>4. What is type coercion in JavaScript? Give an example.</h2>
            <div className='space-y-2'>
                <p>Type coercion in JavaScript is the process where the language automatically converts one data type to another to perform an operation or comparison. It can happen implicitly (done automatically by JavaScript) or explicitly (done by the developer using functions like Number(), String(), etc.).</p>
                <div className='space-y-2'>
                    <h3 className='font-bold text-lg'>Types of Coercion</h3>
                    <div className='px-4'>
                        <p>1.Implicit Coercion: JavaScript automatically converts types when required.</p>
                        <p>2. Explicit Coercion:The developer explicitly converts a value from one type to another using conversion functions.</p>
                    </div>
                </div>
                <div className='space-y-2'>
                    <h3 className='font-bold text-lg'>Examples of Type Coercion</h3>
                    <div className='px-4'>
                        <h3 className='font-semibold'>1. Comparison with ==:</h3>
                        <p className='px-4'>Implicit type conversion happens during loose equality comparisons.</p>
                    </div>
                    <div className='px-4'>
                        <h3 className='font-semibold'>2. Arithmetic Operations:</h3>
                        <p className='px-4'>JavaScript tries to coerce non-numeric types to numbers.</p>
                    </div>
                    <div className='px-4'>
                        <h3 className='font-semibold'>3. Logical Contexts:</h3>
                        <p className='px-4'>Values are coerced to booleans in conditions.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>5. Explain the concept of scope in JavaScript.</h2>
            <div className='space-y-2'>
                <p>In JavaScript, scope refers to the context in which variables, functions, and objects are accessible or visible during code execution. It determines the part of the program where a particular variable can be used.</p>
                <div className='space-y-2'>
                    <h3 className='font-bold text-lg'>Types of Scope in JavaScript</h3>
                    <div>
                        <h4 className='font-semibold'>1, Global Scope</h4>
                        <p className='px-4'>Variables declared outside any function or block belong to the global scope. They are accessible from any part of the code.</p>
                    </div>
                    <div>
                        <h4 className='font-semibold'>2. Function Scope</h4>
                        <p className='px-4'>Variables declared with var inside a function are function-scoped. They are accessible only within the function where they are defined.</p>
                    </div>
                    <div>
                        <h4 className='font-semibold'>3. Block Scope</h4>
                        <p className='px-4'>Variables declared with let and const are block-scoped. They are accessible only within the block ({}) in which they are defined.</p>
                    </div>
                    <div>
                        <h4 className='font-semibold'>4. Module Scope</h4>
                        <p className='px-4'>In ES6 modules, variables declared inside a module are module-scoped. They are accessible only within the module unless explicitly exported.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>6. What is hoisting in JavaScript?</h2>
            <div>
                <p>Hoisting in JavaScript is a behavior in which variable and function declarations are moved to the top of their scope during the compilation phase, before code execution. This means you can use variables and functions in your code before they are declared, though the behavior depends on how they are declared.</p>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>7. What are template literals, and how are they used?</h2>
            <div className='space-y-2'>
                <p>Template literals are a feature in JavaScript introduced with ES6 (ECMAScript 2015) that allows for more readable and flexible string creation. They are enclosed by backticks (`) instead of single or double quotes. Template literals make it easy to include variables, expressions, and multi-line strings in a clean and intuitive way.</p>
                <div className='space-y-2'>
                    <h3 className='font-bold text-lg'>Common Use Cases</h3>
                    <div className='px-4'>
                        <p>1. Dynamic HTML Generation</p>
                        <p>2. Logging and Debugging</p>
                        <p>3. Embedding Expressions</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>8. Explain what a higher-order function is in JavaScript.</h2>
            <div className='space-y-2'>
                <p>In JavaScript, a higher-order function is a function that either Takes another function as an argument, or Returns a function as its result, or both.</p>
                <div className='space-y-1'>
                    <h3 className='font-bold text-lg'>Characteristics of Higher-Order Functions</h3>
                    <div className='px-4'>
                        <p>1. They operate on other functions.</p>
                        <p>2. They can abstract or manipulate actions.</p>
                        <p>3. They allow for more flexible, concise, and reusable code.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>9. What are arrow functions, and how are they different from regular functions?</h2>
            <div className='space-y-2'>
                <p>Arrow functions are a more concise way of writing functions in JavaScript, introduced in ES6 (ECMAScript 2015). They are defined using the = (arrow) syntax. Arrow functions are particularly useful for writing shorter function expressions.</p>
                <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Feature</th>
                            <th className="px-4 py-2 border border-gray-300">Regular Functions</th>
                            <th className="px-4 py-2 border border-gray-300">Arrow Functions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">this Binding</td>
                            <td className="px-4 py-2 border border-gray-300">Dynamic (based on call)</td>
                            <td className="px-4 py-2 border border-gray-300">Lexical (inherited)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">arguments Object</td>
                            <td className="px-4 py-2 border border-gray-300">	Available</td>
                            <td className="px-4 py-2 border border-gray-300">Not 	Available</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Use as Constructor</td>
                            <td className="px-4 py-2 border border-gray-300">Allowed</td>
                            <td className="px-4 py-2 border border-gray-300">Not Allowed</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">prototype Property</td>
                            <td className="px-4 py-2 border border-gray-300">Yes</td>
                            <td className="px-4 py-2 border border-gray-300">No</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Syntax</td>
                            <td className="px-4 py-2 border border-gray-300">Verbose</td>
                            <td className="px-4 py-2 border border-gray-300">Concise</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>10. What is an Immediately Invoked Function Expression (IIFE)?</h2>
            <div className='space-y-2'>
                <p>An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed immediately after it is defined. It is a design pattern often used to create a new scope and avoid polluting the global namespace.</p>
                <div className='space-y-1'>
                    <h3 className='font-bold text-lg'>Advantages of IIFE</h3>
                    <div className='px-4'>
                        <p>1. Avoids global variable pollution.</p>
                        <p>2. Creates a private scope for variables.</p>
                        <p>3. Useful for modular and maintainable code.</p>
                        <p>4. Ideal for code that needs to run once during initialization.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>11. Explain the concept of closures in JavaScript.</h2>
            <div>
                <p>A closure in JavaScript is a feature where a function remembers the variables and scope in which it was created, even after that scope has exited. Closures allow a function to access and manipulate variables from an outer function, even after the outer function has finished execution. When a function is defined inside another function, and the inner function uses variables declared in the outer function, a closure is created. The inner function retains access to the outer function's variables, even when the outer function has returned. variables in the outer function's scope persist in memory for the inner function to access.</p>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>12. What is the this keyword, and how does it behave in different contexts?</h2>
            <div className='space-y-2'>
                <p>The this keyword in JavaScript is a special identifier that refers to the context in which a function is executed. Its value is determined dynamically based on how a function is called rather than where it is defined. Understanding this is crucial because it behaves differently depending on the execution context.</p>
                <div className='space-y-2'>
                    <h2 className='font-bold text-lg'>How this Behaves in Different Contexts</h2>
                    <div>
                        <h3 className='font-semibold'>1. Global Context (Outside Any Function)</h3>
                        <p className='px-4'>In non-strict mode, this refers to the global object (window in browsers, global in Node.js). In strict mode, this is undefined.</p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>2. Inside a Regular Function</h3>
                        <p className='px-4'>In non-strict mode, this refers to the global object. In strict mode, this is undefined.</p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>3. Inside a Method</h3>
                        <p className='px-4'>When a function is called as a method of an object, this refers to the object that owns the method.</p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>4. Arrow Functions</h3>
                        <p className='px-4'>Arrow functions do not have their own this. Instead, they inherit this from their lexical scope (the context in which they were defined).</p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>5. In Event Handlers</h3>
                        <p className='px-4'>In event listeners, this refers to the element that triggered the event.</p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>6. In a Constructor Function</h3>
                        <p className='px-4'>When using new to create an object, this refers to the newly created object.</p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>7. In a Class</h3>
                        <p className='px-4'>Inside a class method, this refers to the instance of the class.</p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>8. With Explicit Binding (call, apply, bind)</h3>
                        <p className='px-4'>You can explicitly set the value of this using call, apply, or bind.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>13. What is the difference between null and undefined?</h2>
            <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Aspect</th>
                            <th className="px-4 py-2 border border-gray-300">	null</th>
                            <th className="px-4 py-2 border border-gray-300">undefined</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Type</td>
                            <td className="px-4 py-2 border border-gray-300">null is an object (this is a known JavaScript quirk).</td>
                            <td className="px-4 py-2 border border-gray-300">undefined is of type undefined.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Meaning</td>
                            <td className="px-4 py-2 border border-gray-300">Represents intentional absence of a value or object.</td>
                            <td className="px-4 py-2 border border-gray-300">Represents an uninitialized value or variable.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">When is it used?</td>
                            <td className="px-4 py-2 border border-gray-300">Used explicitly to indicate that a variable or property should have no value.</td>
                            <td className="px-4 py-2 border border-gray-300">Used by JavaScript when a variable is declared but not yet assigned a value, or when a function does not return a value.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Default Value</td>
                            <td className="px-4 py-2 border border-gray-300">	You can assign null to variables, but it won't be assigned automatically by JavaScript.</td>
                            <td className="px-4 py-2 border border-gray-300">undefined is the default value for variables that are declared but not initialized, and for function arguments that are missing.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Example Usage</td>
                            <td className="px-4 py-2 border border-gray-300">let user = null; (indicating no user object is assigned yet)</td>
                            <td className="px-4 py-2 border border-gray-300">let name; (variable name is declared but not assigned, its value is undefined)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Equality Comparison</td>
                            <td className="px-4 py-2 border border-gray-300">null == undefined returns true (they are loosely equal)</td>
                            <td className="px-4 py-2 border border-gray-300">null === undefined returns false (they are strictly different)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Properties</td>
                            <td className="px-4 py-2 border border-gray-300">null has no properties or methods. Accessing properties on null results in a TypeError.</td>
                            <td className="px-4 py-2 border border-gray-300">undefined also has no properties or methods.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Common Scenarios</td>
                            <td className="px-4 py-2 border border-gray-300">Used when you want to explicitly show that a variable should not hold a value (e.g., empty object, empty array, etc.).</td>
                            <td className="px-4 py-2 border border-gray-300">Automatically assigned to variables and function parameters if no value is provided.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>14. How do you copy an object in JavaScript? Explain shallow vs. deep copy.</h2>
            <div className='space-y-3'>
                <p>In JavaScript, copying an object refers to creating a new object that has the same properties as an existing one. However, the way the copying is done determines whether it’s a shallow copy or a deep copy.</p>
                <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Aspect</th>
                            <th className="px-4 py-2 border border-gray-300">	Shallow Copy</th>
                            <th className="px-4 py-2 border border-gray-300">	Deep Copy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Copy Level</td>
                            <td className="px-4 py-2 border border-gray-300">Copies only the first level of the object.</td>
                            <td className="px-4 py-2 border border-gray-300">Copies all levels recursively (including nested objects).</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Nested Objects</td>
                            <td className="px-4 py-2 border border-gray-300">Nested objects are copied by reference (changes affect both).</td>
                            <td className="px-4 py-2 border border-gray-300">Nested objects are copied by value (independent objects).</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Usage</td>
                            <td className="px-4 py-2 border border-gray-300">Suitable for copying flat objects or when nested objects are not modified.</td>
                            <td className="px-4 py-2 border border-gray-300">Suitable for copying objects with nested structures or when full independence is needed.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>15. Explain how call, apply, and bind work in JavaScript.</h2>
            <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Aspect</th>
                            <th className="px-4 py-2 border border-gray-300">call()</th>
                            <th className="px-4 py-2 border border-gray-300">apply()</th>
                            <th className="px-4 py-2 border border-gray-300">bind()</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Invocation</td>
                            <td className="px-4 py-2 border border-gray-300">Immediately invokes the function.</td>
                            <td className="px-4 py-2 border border-gray-300">Immediately invokes the function.</td>
                            <td className="px-4 py-2 border border-gray-300">Returns a new function, does not invoke immediately.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Arguments</td>
                            <td className="px-4 py-2 border border-gray-300">Arguments are passed individually.</td>
                            <td className="px-4 py-2 border border-gray-300">Arguments are passed as an array or array-like object.</td>
                            <td className="px-4 py-2 border border-gray-300">Arguments can be passed individually, and some can be pre-set.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Usage</td>
                            <td className="px-4 py-2 border border-gray-300">Use when you know the number of arguments.</td>
                            <td className="px-4 py-2 border border-gray-300">Use when you have arguments in an array or array-like format.</td>
                            <td className="px-4 py-2 border border-gray-300">Use when you need to set this once and call the function later.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>16. What is the prototype chain, and how does inheritance work in JavaScript?</h2>
            <div className='space-y-2'>
                <p>The prototype chain is a series of objects connected by the prototype property, where each object can inherit properties and methods from its prototype. If a property or method is not found directly on an object, JavaScript looks for it in the object's prototype, and then in the prototype of the prototype, and so on, until it reaches null.</p>
                <div className='space-y-1'>
                    <h2 className='font-bold text-lg'>How Does Inheritance Work in JavaScript?</h2>
                    <p>In JavaScript, inheritance is based on the prototype of an object. Each function has a prototype object that contains properties and methods that are inherited by instances of that function. The inheritance is built through the prototype chain, which links an object to its constructor function's prototype, and the prototype of the prototype, continuing until Object.prototype.</p>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>17. What are some common array methods in JavaScript?</h2>
            <div className='space-y-2'>
                <p>JavaScript arrays come with a variety of built-in methods that allow you to manipulate, traverse, and modify arrays in an efficient and flexible way. Here’s a list of some of the most commonly used array methods:</p>
                <div className='space-y-2'>
                    <div>
                        <h3 className='font-bold'>1. .push()</h3>
                        <p className='px-4'>Adds one or more elements to the end of an array and returns the new length of the array.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>2. .pop()</h3>
                        <p className='px-4'>Removes the last element from an array and returns that element. This method modifies the original array.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>3. .shift()</h3>
                        <p className='px-4'>Removes the first element from an array and returns that element. This method modifies the original array.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>4. .unshift()</h3>
                        <p className='px-4'>Adds one or more elements to the beginning of an array and returns the new length of the array.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>5. .concat()</h3>
                        <p className='px-4'>Merges two or more arrays into one. This method does not modify the original arrays, but returns a new array.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>6. .slice()</h3>
                        <p className='px-4'>Returns a shallow copy of a portion of an array. It takes two arguments: the start index and the end index (not inclusive). The original array is not modified.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>7. .splice()</h3>
                        <p className='px-4'>Changes the contents of an array by removing, replacing, or adding elements at a specific index. It modifies the original array.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>8. .forEach()</h3>
                        <p className='px-4'>Executes a provided function once for each element in the array. It doesn't return anything (undefined), but it’s commonly used for iteration.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>9. .map()</h3>
                        <p className='px-4'>Creates a new array by applying a function to each element of the original array. This method does not modify the original array.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>10. .filter()</h3>
                        <p className='px-4'>Creates a new array with all elements that pass a test implemented by the provided function.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>11. .reduce()</h3>
                        <p className='px-4'>Executes a reducer function (provided by you) on each element of the array (from left to right) to reduce it to a single value. It can take an initial value as its second argument.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>12. .reduceRight()</h3>
                        <p className='px-4'>Similar to .reduce(), but processes the array from right to left.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>13. .find()</h3>
                        <p className='px-4'>Returns the first element in the array that satisfies the provided testing function. If no elements are found, it returns undefined.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>14. .findIndex()</h3>
                        <p className='px-4'>Returns the index of the first element that satisfies the provided testing function. If no elements match, it returns -1.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>15. .every()</h3>
                        <p className='px-4'>Tests whether all elements in the array pass the test implemented by the provided function. It returns true if all elements pass, otherwise false.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>16. .some()</h3>
                        <p className='px-4'>Tests whether at least one element in the array passes the test implemented by the provided function. It returns true if at least one element passes, otherwise false.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>17. .includes()</h3>
                        <p className='px-4'>Determines whether an array contains a certain value. It returns true if the value is found, otherwise false.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>18. .indexof()</h3>
                        <p className='px-4'>Returns the index of the first occurrence of a specified element. If the element is not found, it returns -1.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>19. .join()</h3>
                        <p className='px-4'>Joins all elements of an array into a single string. You can specify a separator to use between elements.</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>20. .sort()</h3>
                        <p className='px-4'>Sorts the elements of an array in place (modifies the original array) and returns the sorted array. By default, the elements are sorted as strings.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>18. How does map() differ from forEach() in arrays?</h2>
            <div className='space-y-2'>
                <h3>Key Differences between .map() and .forEach()</h3>
                <div className='space-y-1'>
                    <h4 className='font-bold'>1. Return Value:</h4>
                    <div className='px-4'>
                        <p>(a) .map(): Returns a new array containing the results of applying the callback function to each element in the original array.</p>
                        <p>(b) .forEach(): Does not return anything (returns undefined). It simply iterates over the array and applies the provided function to each element.</p>
                    </div>
                </div>
                <div className='space-y-1'>
                    <h4 className='font-bold'>2. Purpose:</h4>
                    <div className='px-4'>
                        <p>(a) .map(): Used when you want to transform or modify each element of the array and return a new array with the transformed elements.</p>
                        <p>(b) .forEach(): Used when you want to perform side effects or execute some operation on each element (like logging, updating something outside the array, etc.), but do not need a new array.</p>
                    </div>
                </div>
                <div className='space-y-1'>
                    <h4 className='font-bold'>3. Immutability:</h4>
                    <div className='px-4'>
                        <p>(a) .map(): Does not modify the original array. Instead, it creates and returns a new array.</p>
                        <p>(b) .forEach(): Does not modify the original array by default, but it can modify elements of the array if the operation inside the callback function changes them.</p>
                    </div>
                </div>
                <div className='space-y-1'>
                    <h4 className='font-bold'>4. Chaining:</h4>
                    <div className='px-4'>
                        <p>(a) .map(): Since it returns a new array, it can be chained with other array methods (like .filter(), .reduce(), etc.).</p>
                        <p>(b) .forEach(): Cannot be chained, since it returns undefined.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>19. Explain the filter() method. How does it work?</h2>
            <div className='space-y-2'>
                <p>The .filter() method in JavaScript is used to create a new array containing all the elements from the original array that satisfy a specified condition. It does not modify the original array. Instead, it returns a new array with the elements that pass the provided test implemented by a callback function.</p>
                <div>
                    <h3 className='font-bold text-lg'>How It Works:</h3>
                    <div className='px-4'>
                        <p>1. .filter() goes through each element of the array and calls the provided callback function.</p>
                        <p>2. If the callback function returns true for an element, that element is included in the new array.</p>
                        <p>3. The original array remains unchanged.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>20. What does the reduce() method do, and how is it used?</h2>
            <div className='space-y-2'>
                <p>The .reduce() method in JavaScript is used to reduce an array to a single value by applying a function (called a reducer) to each element in the array. It processes the array from left to right (or optionally right to left using .reduceRight()), accumulating a result that is returned after processing all elements.</p>
                <div>
                    <h3 className='text-lg font-bold'>How .reduce() Works:</h3>
                    <div className='px-4'>
                        <p>1. Accumulates a single value as it processes each element of the array.</p>
                        <p>2. The callback function is called once for each element in the array, and the result of the function is stored in the accumulator.</p>
                        <p>3. The final result is returned after all elements have been processed.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>21. How do you find the length of a string and reverse it?</h2>
            <div className='space-y-2'>
                <p>You can find the length of a string in JavaScript using the .length property. This property returns the number of characters in the string.  The .length property returns the number of characters in the string (including spaces, punctuation, etc.).</p>
                <div>
                    <h3 className='font-bold text-lg'>Reversing a String in JavaScript</h3>
                    <p>JavaScript does not have a built-in method to directly reverse a string, but you can accomplish this by using a combination of string and array methods. Here's the typical way to reverse a string:</p>
                </div>
                <div>
                    <h5 className='font-bold text-lg'>Steps to Reverse a String:</h5>
                    <div className='px-4'>
                        <p>1. Convert the string to an array using .split('').</p>
                        <p>2. Reverse the array using .reverse().</p>
                        <p>3. Join the array elements back into a string using .join('').</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>22. What are template literals, and how can they be used for string manipulation?</h2>
            <div className='space-y-2'>
                <p>Template literals (also known as template strings) are a feature in JavaScript that allows you to work with strings in a more readable and flexible way. Template literals are enclosed by backticks (``) instead of regular quotes (' or "), and they provide several advantages over traditional strings.</p>
                <div>
                    <h3 className='text-lg font-bold'>Key Features of Template Literals:</h3>
                    <div className='px-4'>
                        <p>1. String Interpolation: You can embed expressions directly inside the string using ${} syntax.</p>
                        <p>2. Multiline Strings: Template literals allow you to create strings that span multiple lines without needing escape characters like \n.</p>
                        <p>3. Expression Evaluation: You can insert any JavaScript expression inside ${}, including variables, calculations, function calls, and more.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>23. How do you remove duplicates from an array?</h2>
            <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Method</th>
                            <th className="px-4 py-2 border border-gray-300">	Performance	</th>
                            <th className="px-4 py-2 border border-gray-300">Simplicity</th>
                            <th className="px-4 py-2 border border-gray-300">	Best Use Case</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Set</td>
                            <td className="px-4 py-2 border border-gray-300">Best</td>
                            <td className="px-4 py-2 border border-gray-300">Simple</td>
                            <td className="px-4 py-2 border border-gray-300">When you want a concise solution for unique values.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">filter() with indexOf()</td>
                            <td className="px-4 py-2 border border-gray-300">Good</td>
                            <td className="px-4 py-2 border border-gray-300">Moderate</td>
                            <td className="px-4 py-2 border border-gray-300">When you need to keep the order of elements and don’t mind extra computation.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">reduce()</td>
                            <td className="px-4 py-2 border border-gray-300">Moderate</td>
                            <td className="px-4 py-2 border border-gray-300">Flexible</td>
                            <td className="px-4 py-2 border border-gray-300">When you need more control over the accumulation process.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">forEach() with Object/Map</td>
                            <td className="px-4 py-2 border border-gray-300">Good</td>
                            <td className="px-4 py-2 border border-gray-300">Moderate</td>
                            <td className="px-4 py-2 border border-gray-300">	When you need an explicit, manual process for deduplication.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">for Loop</td>
                            <td className="px-4 py-2 border border-gray-300">Moderate</td>
                            <td className="px-4 py-2 border border-gray-300">Basic</td>
                            <td className="px-4 py-2 border border-gray-300">When you want full control and need to handle complex cases.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>24. How does JavaScript handle implicit type conversion?</h2>
            <div>
                <p>Implicit type conversion in JavaScript occurs when operators or functions automatically convert values between different types to make the operation valid. While this can simplify coding, it can also lead to unexpected results if you are not careful with the types involved. Understanding how JavaScript handles coercion, especially with comparison operators (== vs ===), logical operations, and string concatenation, is crucial to avoid bugs and ensure predictable behavior.</p>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>25. What does typeof return for different data types?</h2>
            <div className='space-y-2'>
                <h2 className='text-lg font-bold'>Summary Table</h2>
                <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Data Type</th>
                            <th className="px-4 py-2 border border-gray-300">typeof Return Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">String</td>
                            <td className="px-4 py-2 border border-gray-300">"string"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Number</td>
                            <td className="px-4 py-2 border border-gray-300">"number"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">BigInt</td>
                            <td className="px-4 py-2 border border-gray-300">"bigint"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Boolean</td>
                            <td className="px-4 py-2 border border-gray-300">"boolean"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Undefined</td>
                            <td className="px-4 py-2 border border-gray-300">"undefined"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Symbol</td>
                            <td className="px-4 py-2 border border-gray-300">"symbol"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Null</td>
                            <td className="px-4 py-2 border border-gray-300">	"object" (quirk)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Object (general)</td>
                            <td className="px-4 py-2 border border-gray-300">v</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Array</td>
                            <td className="px-4 py-2 border border-gray-300">"object" (use Array.isArray() to check for arrays)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Function</td>
                            <td className="px-4 py-2 border border-gray-300">"function"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Date</td>
                            <td className="px-4 py-2 border border-gray-300">"object"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">RegExp</td>
                            <td className="px-4 py-2 border border-gray-300">"object"</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>26. What is NaN, and how can you check if a value is NaN?</h2>
            <div className='space-y-2'>
                <p>NaN stands for Not-a-Number, and it is a special value in JavaScript that represents an invalid or unrepresentable numeric value. It is a result of certain operations that fail to produce a valid number.</p>
                <div>
                    <h3 className='font-bold text-lg'>How to Check if a Value is NaN?</h3>
                    <div className='px-4'>
                        <h4 className='font-semibold'>1. Using isNaN() Function:</h4>
                        <p className='px-4'>The global isNaN() function checks if a value is NaN. However, it has a quirk: it first coerces the value to a number, so it will return true for any non-numeric value (like a string) before checking if it's actually NaN.</p>
                    </div>
                    <div className='px-4'>
                        <h4 className='font-semibold'>2. Using Number.isNaN():</h4>
                        <p className='px-4'>To specifically check if a value is NaN, you can use Number.isNaN(), which does not coerce the value. It only returns true if the value is literally NaN.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>27. How does JavaScript handle implicit type conversion?</h2>
            <div>
                <p>Implicit type conversion in JavaScript occurs when operators or functions automatically convert values between different types to make the operation valid. While this can simplify coding, it can also lead to unexpected results if you are not careful with the types involved. Understanding how JavaScript handles coercion, especially with comparison operators (== vs ===), logical operations, and string concatenation, is crucial to avoid bugs and ensure predictable behavior.</p>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>28. What does typeof return for different data types?</h2>
            <div className='space-y-2'>
                <h2 className='font-bold text-lg'>Summary Table</h2>
                <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Data Type</th>
                            <th className="px-4 py-2 border border-gray-300">typeof Return Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">String</td>
                            <td className="px-4 py-2 border border-gray-300">"string"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Number</td>
                            <td className="px-4 py-2 border border-gray-300">"number"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">BigInt</td>
                            <td className="px-4 py-2 border border-gray-300">"bigint"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Boolean</td>
                            <td className="px-4 py-2 border border-gray-300">"boolean"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Undefined</td>
                            <td className="px-4 py-2 border border-gray-300">"undefined"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Symbol</td>
                            <td className="px-4 py-2 border border-gray-300">"symbol"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Null</td>
                            <td className="px-4 py-2 border border-gray-300">	"object" (quirk)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Object (general)</td>
                            <td className="px-4 py-2 border border-gray-300">v</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Array</td>
                            <td className="px-4 py-2 border border-gray-300">"object" (use Array.isArray() to check for arrays)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Function</td>
                            <td className="px-4 py-2 border border-gray-300">"function"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Date</td>
                            <td className="px-4 py-2 border border-gray-300">"object"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">RegExp</td>
                            <td className="px-4 py-2 border border-gray-300">"object"</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>29. What is NaN, and how can you check if a value is NaN?</h2>
            <div className='space-y-2'>
                <p>NaN stands for Not-a-Number, and it is a special value in JavaScript that represents an invalid or unrepresentable numeric value. It is a result of certain operations that fail to produce a valid number.</p>
                <div>
                    <h3 className='font-bold text-lg'>How to Check if a Value is NaN?</h3>
                    <div className='px-4'>
                        <h4 className='font-semibold'>1. Using isNaN() Function:</h4>
                        <p className='px-4'>The global isNaN() function checks if a value is NaN. However, it has a quirk: it first coerces the value to a number, so it will return true for any non-numeric value (like a string) before checking if it's actually NaN.</p>
                    </div>
                    <div className='px-4'>
                        <h4 className='font-semibold'>2. Using Number.isNaN():</h4>
                        <p className='px-4'>To specifically check if a value is NaN, you can use Number.isNaN(), which does not coerce the value. It only returns true if the value is literally NaN.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>30. What is event delegation, and how does it work?</h2>
            <div className='space-y-2'>
                <p>Event delegation is a technique in JavaScript where you attach a single event listener to a parent element, rather than attaching individual listeners to each child element. The event listener on the parent element handles events that bubble up from the child elements. This is useful when dealing with dynamic content, where new elements might be added to the DOM after the page is loaded.</p>
                <div className='space-y-2'>
                    <h3 className='font-bold text-lg'>How Event Delegation Works:</h3>
                    <div className='space-y-1'>
                        <p>1. Event Bubbling: When an event is triggered on an element (e.g., a button is clicked), the event doesn't stop at that element. Instead, it "bubbles up" to its parent elements, continuing to propagate through the DOM tree until it reaches the root (document). This allows parent elements to catch events triggered on their children.</p>
                        <p>2. Event Listener on Parent: Instead of attaching event listeners to each child element, you attach a single event listener to the parent element that listens for events on its descendants.</p>
                        <p>3. Determining the Target: Inside the event handler, you can check which child element triggered the event by using the event.target property. This allows you to handle the event based on the specific child element that was interacted with.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>31. What are default parameters in JavaScript?</h2>
            <div>
                <p>Default parameters in JavaScript allow you to specify default values for function parameters when no argument is passed for that parameter. This is a useful feature to handle cases where some arguments might be optional, and you want to provide a fallback value if they are not provided. param1, param2: The parameters of the function. defaultValue1, defaultValue2: The default values for the respective parameters. If the function is called without passing a value for a parameter, the default value is used.</p>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>32. What is the difference between synchronous and asynchronous programming?</h2>
            <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Aspect</th>
                            <th className="px-4 py-2 border border-gray-300">Synchronous Programming</th>
                            <th className="px-4 py-2 border border-gray-300">Asynchronous Programming</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Execution Flow</td>
                            <td className="px-4 py-2 border border-gray-300">Tasks are executed one after another, in order.</td>
                            <td className="px-4 py-2 border border-gray-300">Tasks can be executed independently, and the program doesn't wait for one task to finish before starting the next.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Blocking</td>
                            <td className="px-4 py-2 border border-gray-300">Blocks the execution of further tasks until the current one completes.</td>
                            <td className="px-4 py-2 border border-gray-300">Non-blocking; the program continues running while waiting for tasks to complete.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Performance</td>
                            <td className="px-4 py-2 border border-gray-300">Can lead to performance issues, especially for time-consuming tasks.</td>
                            <td className="px-4 py-2 border border-gray-300">More efficient, particularly for tasks like I/O operations (network, file system, etc.).</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Complexity</td>
                            <td className="px-4 py-2 border border-gray-300">	Easier to understand and debug since the flow is linear.</td>
                            <td className="px-4 py-2 border border-gray-300">Can be more complex to reason about, especially with multiple asynchronous tasks.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Use Cases</td>
                            <td className="px-4 py-2 border border-gray-300">Simple operations where tasks need to be executed in a strict sequence.</td>
                            <td className="px-4 py-2 border border-gray-300">Long-running operations like network requests, timers, file reading, or user input handling.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>33. How does the setTimeout function work, and what is its use?</h2>
            <div className='space-y-2'>
                <div>
                    <h3 className='font-bold text-lg'>How setTimeout() works:</h3>
                    <div className='px-4'>
                        <p>1. When you call setTimeout(), it schedules the execution of the specified callback function after the specified delay.</p>
                        <p>2. The delay is not a guarantee that the function will run exactly after that time. It indicates the minimum time to wait, but the actual execution might be delayed further due to other factors, such as the event loop, other code execution, or system load.</p>
                        <p>3. Once the delay expires, the callback is placed in the event queue, and when the JavaScript engine is ready (i.e., when the call stack is empty), it will execute the callback function.</p>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Use Cases for setTimeout():</h3>
                    <div className='px-4'>
                        <p>1. Delaying Code Execution: You can delay the execution of a function until a later time.</p>
                        <p>2. Creating Timed Events: You can create time-based events, such as animations or reminders.</p>
                        <p>3. imulating Asynchronous Behavior: For testing purposes or simulating time delays, you can use setTimeout() to mimic asynchronous functions like network requests.</p>
                        <p>4. Recurring Delayed Actions: Though setTimeout() is for a single delayed execution, it can be used in combination with itself to create a repeating delay:</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>34. What is the purpose of JSON.stringify() and JSON.parse()?</h2>
            <div className='space-y-2'>
                <p>JSON.stringify() and JSON.parse() are two built-in methods in JavaScript that are used for working with JSON (JavaScript Object Notation) data, which is a popular format for transmitting and storing data.</p>
                <div className='space-y-2'>
                    <div>
                        <h3 className='font-bold text-lg'>1. JSON.stringify()</h3>
                        <p className='px-4'>The JSON.stringify() method is used to convert a JavaScript object or value into a JSON string. This is often used when you need to send data over a network (e.g., via an API), or when you need to store it in a format that is easily readable and transportable (e.g., in local storage or a file).</p>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>2. JSON.parse()</h3>
                        <p className='px-4'>The JSON.parse() method is used to convert a JSON string into a JavaScript object or value. This is typically used when you receive JSON data (e.g., from a server response) and want to convert it into an object that you can work with in JavaScript.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>35. How can you handle asynchronous code in JavaScript?</h2>
            <div>
                <p>In JavaScript, there are several ways to handle asynchronous code to avoid blocking the main execution thread. These methods allow you to perform operations like making HTTP requests, reading files, or interacting with databases without freezing the program. A callback is a function that gets passed as an argument to another function, and it's executed after the asynchronous operation completes. A Promise is a more powerful and flexible way to handle asynchronous code. It represents a value that may not be available yet but will be resolved in the future. async and await are syntactic sugar built on top of Promises, providing a more synchronous-like structure for writing asynchronous code. It makes the code cleaner and easier to read. For user interactions (such as clicking buttons, submitting forms, etc.), JavaScript often uses event listeners that handle asynchronous operations via callbacks. For user interactions (such as clicking buttons, submitting forms, etc.), JavaScript often uses event listeners that handle asynchronous operations via callbacks. When you need to run multiple asynchronous operations concurrently and wait for all of them to complete, you can use Promise.all().</p>
            </div>
        </div>
        <div className='px-8 py-2'>
            <h2 className='font-bold text-red-600 font-xl mb-3'>36. Explain the concept of the Event Loop in JavaScript.</h2>
            <div className='space-y-2'>
                <p>The Event Loop is a fundamental concept in JavaScript that enables asynchronous programming and allows JavaScript to handle tasks like user input, API calls, timeouts, and other events without blocking the main thread of execution.</p>
                <div>
                    <h3 className='font-bold text-lg'>Overview of the Event Loop</h3>
                    <p>JavaScript is a single-threaded language, meaning it can only execute one operation at a time. However, JavaScript is often used in environments like web browsers or Node.js, where there are tasks like handling user input, reading from a database, making HTTP requests, and updating the UI, which need to happen asynchronously while still allowing the program to continue running. The Event Loop is the mechanism that allows JavaScript to execute asynchronous code while maintaining a single thread of execution. It does this by managing a queue of events and tasks and processing them one at a time in a non-blocking manner.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Javascript;