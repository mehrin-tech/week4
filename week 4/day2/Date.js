
//Dates:-
The Date object is a built-in JavaScript object that lets you create, store, manipulate, and format dates and times.
 It represents a single point in time, down to milliseconds.
 1)create date
 let now = new Date();                       // current date and time
let dob = new Date("2000-01-01");           // specific date
let custom = new Date(2025, 5, 12);         // year, month (0-indexed), day

2). Get Date/Time Info

let today = new Date();

console.log(today.getFullYear()); // Year: 2025
console.log(today.getMonth());    // Month (0 = Jan): 5 → June
console.log(today.getDate());     // Day of month: 12
console.log(today.getDay());      // Day of week (0 = Sunday): 4 → Thursday
console.log(today.getHours());    // Current hour

3)Set Date Values

let d = new Date();

d.setFullYear(2030);
d.setMonth(0);     // January
d.setDate(1);

console.log(d.toDateString());  // Outputs: Wed Jan 01 2030

4)Format Date for Display

let d = new Date();

let formatted = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
console.log(formatted); // 12/6/2025