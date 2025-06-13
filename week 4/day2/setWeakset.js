->//SEt 
set:-
A Set is a built-in JavaScript object that stores unique values — no duplicates allowed.
const mySet = new Set([1, 2, 3, 3]);
console.log(mySet); // Set(3) {1, 2, 3} — duplicates removed
->Use Case:-
To store only unique items

To remove duplicates from arrays

To check existence quickly

To perform set operations (like union, intersection)
//Useful methods
add()	set.add(value)
const fruits = new Set(["apple", "banana", "apple"]); 
console.log(fruits); // Set(2) { 'apple', 'banana' } — duplicates removed
fruits.add("orange");
console.log(fruits); // Set(3) { 'apple', 'banana', 'orange' }

delete()	set.delete(value)
fruits.delete("banana");
console.log(fruits); // Set(2) { 'apple', 'orange' }

has()	set.has(value) → true/false
console.log(fruits.has("banana")); // true
console.log(fruits.has("mango"));  // false

clear()	set.clear()


fruits.clear();
console.log(fruits); // Set(0) {}

size	set.size
const numbers = new Set([1, 2, 3]);
console.log(numbers.size); // 3

//weakSet

A WeakSet is a special kind of Set that:

Stores only objects (not primitives like numbers or strings)

Holds weak references to those objects (doesn't prevent them from being garbage collected)

Is not iterable and has no size property

//use case:-
To store temporary or private objects

Ideal for tracking object presence without affecting memory

Lets garbage collector automatically clean up if the object is no longer used elsewhere
You cannot loop over a WeakSet. No .forEach(), .size, or .values().

const weakSet = new WeakSet();

const person1 = {name: "Mehrin"};
const person2 = {name: "Mehfil"};

// add()
weakSet.add(person1);
weakSet.add(person2);

// has()
console.log(weakSet.has(person1)); // true

// delete()
weakSet.delete(person1);
console.log(weakSet.has(person1)); // false