//execution context
Execution Context is the environment in which JavaScript code is evaluated and executed.
Global Execution Context (GEC)-	its Created when JS file starts running. There is only one.
Function Execution Context (FEC)-its	Created every time a function is called.
execution context have 2 phase:-
memory creation phase 
*Variables declared with var are hoisted (set to undefined)
*Function declarations are stored

 code execution phase:-
 Variables are assigned values

Code is executed line by line
Global Context-	    Created once for every JS file
Function Context-	Created each time a function is called
Call Stack-       	Manages the order of function execution

//execution 
Memory Creation Phase (also called Creation or Hoisting Phase)
In this phase, before execution, the JS engine:

Scans the entire code.Allocates memory for:Variables (set to undefined).Functions (loaded completely into memory)

var declarations are hoisted (moved to the top) and initialized with undefined.but let and const are hoisted too, 
but they stay in the Temporal Dead Zone (TDZ) and are not initialized.

Function declarations are hoisted with their entire definition.

ex:-
var a → undefined

function add → entire function

let b → uninitialized (in TDZ)

console.log(a);    // undefined
console.log(b);    // ReferenceError
console.log(add()); // 30

var a = 10;
let b = 20;

function add() {
  return 10 + 20;
}
Code Execution Phase:-
the code is executed line by line:

Variable assignments happen.

Function calls are executed.

If a function is called, a new function Execution Context is created for that function, and the same two phases (Memory + Execution)
 happen inside it.

 Diagrm
 1️⃣ Memory Creation Phase
   - var → undefined
   - function → definition
   - let/const → TDZ

2️⃣ Execution Phase
   - Line-by-line execution
   - Assign values
   - Run functions

->Hoisting:-
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope during the memory phase.
It allows you to use variables and functions before they appear in the code (but with differences between var, let, const, and functions).

var: Hoisted and initialized as undefined.
console.log(a); // undefined
var a = 10;

let and const: Hoisted but not initialized (stays in Temporal Dead Zone).
console.log(b); // ReferenceError (in TDZ)
let b = 20;


Function declarations: Entire function is hoisted.
sayHi(); // Works, function is hoisted
function sayHi() {
  console.log("Hi!");
}

Function expressions: Only the variable is hoisted (set to undefined), not the function body.
greet(); // TypeError: greet is not a function
var greet = function () {
  console.log("Hello!");
};

--->TEMPORALDEAD Zone
Temporal Dead Zone (TDZ)

TDZ is the time between entering the scope and the point where the variable is declared and initialized.
 During this time, accessing the variable throws a ReferenceError.

To prevent accidental access to uninitialized let and const variables before their declaration.
For let and const, variable is hoisted but not initialized.

It's in the TDZ from the start of the block until the line of declaration.

----->callstack behaviour:-

The call stack is a data structure (LIFO – Last In, First Out) that tracks function execution in JavaScript.


To manage function calls and return control back after a function finishes execution.

---working:-
When a function is called, it is pushed to the top of the stack.

When it finishes, it is popped off.

If a function calls another, the new function goes on top.
function one() {
  two();
  console.log("One");
}
function two() {
  three();
  console.log("Two");
}
function three() {
  console.log("Three");
}

one();
---------single threaded language
JavaScript is a single-threaded programming language, meaning:

It can only execute one task (or one piece of code) at a time.

It has one call stack and one main thread of execution.

So, it does not run multiple pieces of code in parallel like multi-threaded languages do.

----STRICT move
"use strict" is a way to opt in to a restricted version of JavaScript.

It catches common coding mistakes, makes your code safer, and helps you write cleaner, more predictable code.
globally:-
"use strict";

x = 10;  //  referenceError: x is not defined
locally:-
function test() {
  "use strict";
  y = 5; //  ReferenceError: y is not defined
}
test();

---IIFE----
 stands for Immediately Invoked Function Expression.

It’s a function that Is defined and Executed immediately after it’s created.
EX:-
(function() {
  console.log("IIFE executed");
})();                                 //(function() {...}) → turns the function into an expression.

                                           //() → immediately invokes that functN
        

----CLOSURE
A function inside a function can access variables from its outer (parent) function
 even after the parent function has finished executing.

 --IMP OF CLOSURE
 Data privacy / encapsulation

 Remembering state across function calls

 Creating function factories

 Used in event handlers, callbacks, and asynchronous code

 --WORKING EX:-
 function outer() {
  let name = "Mehrin"; // Outer variable

  function inner() {
    console.log("Hello " + name); // Accessing outer variable
  }

  return inner;
}

const greet = outer();  // outer() runs and returns inner()
greet();  // Hello Mehrin
