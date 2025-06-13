//numbers
numbers are a fundamental data type used to represent both integer and floating-point values,special values.

It does not differentiate between integers and floats — both are of type number.
->numbers
1) parseInt:-integers from string
let str = "123abcdergthy";
let parsed = parseInt(str);  //123 
console.log(parsed );     
let str = "abcd123";
let parsed = parseInt(str);   //NaN   
console.log(parsed );  
console.log(parseInt(null));      // NaN
console.log(parseInt(undefined)); // NaN 
2)parseFloat:-parseFloat() is a built-in JavaScript function that converts a string into a floating-point number (i.e., a number with decimals). 
  let str = "";
let parsed = parseFloat(str); //NaN 
console.log(parsed );     
console.log(parseFloat(null));      // NaN
console.log(parseFloat(undefined)); // NaN 
"45.67"	45.67	Parses entire valid decimal
"123abc"	123	Stops parsing at first non-numeric character
"abc123"	NaN	Starts with invalid character
" 78.9 "	78.9	Ignores leading/trailing whitespace
""	NaN	Empty string cannot be converted
"5.6.7"	5.6	Stops at second decimal point
true, false	NaN	Booleans aren't strings with numeric start
3)Number()
console.log(Number("42"));       // 42
console.log(Number("3.14"));     // 3.14
console.log(Number("100abc"));   // NaN  Entire string must be valid number
console.log(Number("  50  "));   // 50  Trims whitespace
console.log(Number(""));         // 0  empty string = 0
console.log(Number(null));      // 0 
console.log(Number(undefined)); // NaN 