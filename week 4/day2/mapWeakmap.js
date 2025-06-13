//Map
A Map is a collection of key-value pairs, where keys can be any type (objects, numbers, strings, etc.).


//Use case:-
When you need key-value pairs

Allows any data type as key (unlike objects)

Maintains insertion order

Has useful methods and size property

const user = new Map();
user.set("name", "Mehrin");
user.set("age", 22);
user.set(100, "Score");
console.log(user);
// Map(3) { 'name' => 'Mehrin', 'age' => 22, 100 => 'Score' }
console.log(user.get("name")); // Mehrin
console.log(user.get(100));    // Score

console.log(user.has("age"));    // true
console.log(user.has("email"));  // false

user.delete("age");
console.log(user.has("age")); // false

user.clear();
console.log(user.size); // 0

const myMap = new Map();
myMap.set("x", 10);
myMap.set("y", 20);
console.log(myMap.size); // 2



//weakMap:-
A WeakMap is like a regular Map, but:

Only objects can be keys

Keys are weakly referenced

It’s not iterable (can’t use for...of, no .size, no .entries())

//use 
To associate private data with objects (like DOM elements)

Automatically cleans up memory when key object is removed

Used in frameworks/libraries for memory-safe caching

const weakMap = new WeakMap();

const user = {name: "Mehrin"};

// set()
weakMap.set(user, "Session Active");

// get()
console.log(weakMap.get(user)); // "Session Active"

// has()
console.log(weakMap.has(user)); // true

// delete()
weakMap.delete(user);
console.log(weakMap.has(user)); // false
WeakMap is not iterable. You can’t loop through it or get its size.


--------------WeakSet & WeakMap------------
Feature	   WeakSet                    |  	WeakMap
                                      |
Stores	  Only objects (no primitives)|	Key-value pairs (object keys only)
Keys	  Objects	                  |         Objects
Values	  Only object references	  |         Any value
Iterable	 No	                      |       No
Auto-GC	   Yes	                      |        Yes
Methods	  add, has, delete	          |     set, get, has, delete