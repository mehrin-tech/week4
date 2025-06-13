//SYMBOL:-

A Symbol is a primitive data type that represents a unique and immutable identifier.


const sym1 = Symbol();
const sym2 = Symbol("id");
Even if two symbols have the same description, they are always unique:



Symbol("id") === Symbol("id"); // false
 use Symbol
To create unique property keys for objects — avoids naming conflicts.

Useful in libraries/frameworks to define private/internal properties.

Can be used to create hidden or protected data in objects.

to use Symbol

const id = Symbol("id");

const user = {
  name: "Mehrin",
  [id]: 12345 // Symbol as key
};

console.log(user);              // { name: 'Mehrin', [Symbol(id)]: 12345 }
console.log(user[id]);          // 12345
console.log(Object.keys(user)); // [ 'name' ] — Symbol keys are not listed
 Symbols are not shown in for...in loops or JSON.stringify().

 Use Case: Avoid key conflicts

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false — each Symbol is unique

//bigint
BigInt
BigInt is a new primitive type in JavaScript that lets you work with integers larger than Number.MAX_SAFE_INTEGER (2^53 - 1).


const big = 9007199254740991n; // add "n" at the end
//  use BigInt
Regular Number in JS can safely represent only up to 2^53 - 1.

Use BigInt when you need to handle very large integers like in:

Cryptography

Scientific calculations

Financial apps with precise large numbers

use BigInt
 Declare a BigInt

const big1 = 123456789012345678901234567890n;
Convert to BigInt

const num = BigInt(100);

const a = 1000000000000n;
const b = 2000000000000n;

console.log(a + b); // 3000000000000n



let x = 10n;
let y = 5;
console.log(x + y); //  TypeError

console.log(x + BigInt(y)); // 
//  Symbol vs BigInt
Feature  	Symbol	                              BigInt
Type	   Primitive	                         Primitive
Purpose	  Unique identifiers (like hidden keys)	Very large integers
Created with	Symbol()	             BigInt() or 123n
Uniqueness	Always unique	                     Based on numeric value
Used in	Objects, libraries, meta-programming	Math, crypto, finance, precise counts
Operators	Can’t use arithmetic	            Supports +, -, *, /, %, **

