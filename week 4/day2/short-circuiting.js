//SHORT-CIRCUITING
//JavaScript Short-Circuiting with Logical Operators
*Short-circuiting is a feature in JavaScript where logical operators (||, &&, ??) 
stop evaluating as soon as the result is determined.


->LIST OF TRUTHY VALUES:-

Non-empty strings → "hello", "false", "0"

Non-zero numbers → 1, -5, 3.14

Objects → {}, []

Functions → function(){}

true

Date objects → new Date()

Any non-null symbol → Symbol('x')

->LIST OF FALSY VALUES
| **Falsy Value** | **Explanation**                         |
| --------------- | --------------------------------------- |
| `false`         | The Boolean `false` itself              |
| `0`             | The number zero                         |
| `-0`            | Negative zero (treated same as 0)       |
| `0n`            | BigInt version of zero                  |
| `""`            | Empty string                            |
| `null`          | No value                                |
| `undefined`     | Variable declared but not assigned      |
| `NaN`           | "Not a Number" – result of invalid math |


1) || (OR):- it returns  first truthy values.if first is truthy,it retruns immediatly
ex:-
console.log(0 || "hello")     //"hello"  0 is falsy value so checked
console.log("hi"||"hello")    //"hi"     hi is truthy 

2)&& (AND)
   
Returns first falsy value

If first is falsy → it returns immediately
ex:-
console.log(0 && "Hi");    // 0 (stops)
console.log(1 && "Hi");    // "Hi" (continues because 1 is truthy)

3)?? (Nullish Coalescing):
Returns right side only if left is null or undefined

Ignores other falsy values like 0, false, or ''

ex:-
let username = undefined;                        //|  or "Alice"
let displayName = username ?? "Guest";  //"Guest" | or  //"Alice"

console.log(displayName); 

      VISUAL TABLE OF SHORT CIRCUITING

| **Expression**        | **Operator** | **Evaluates As**            | **Result**  | **Reason**                              |    |                         |           |                                |
| --------------------- | ------------ | --------------------------- | ----------- | --------------------------------------- | -- | ----------------------- | --------- | ------------------------------ |
| \`false               |              | "Hello"\`                   | \`          |                                         | \` | false → check next      | `"Hello"` | Returns first **truthy** value |
| \`"Hi"                |              | "Hello"\`                   | \`          |                                         | \` | "Hi" is truthy → stop   | `"Hi"`    | Stops at first **truthy**      |
| \`0                   |              | 100\`                       | \`          |                                         | \` | 0 is falsy → check next | `100`     | 0 is falsy, returns next       |
| `true && "Go"`        | `&&`         | true → check next           | `"Go"`      | Both are truthy                         |    |                         |           |                                |
| `0 && "Go"`           | `&&`         | 0 is falsy → stop           | `0`         | Returns first **falsy** value           |    |                         |           |                                |
| `"Hello" && 42`       | `&&`         | both truthy → return second | `42`        | Last truthy value returned              |    |                         |           |                                |
| `null ?? "Default"`   | `??`         | null → use right            | `"Default"` | `null` triggers fallback                |    |                         |           |                                |
| `0 ?? 100`            | `??`         | 0 is not null/undefined     | `0`         | `??` ignores falsy (0 is returned)      |    |                         |           |                                |
| `undefined ?? "User"` | `??`         | undefined → use right       | `"User"`    | `undefined` triggers fallback           |    |                         |           |                                |
| `false ?? true`       | `??`         | false is not nullish        | `false`     | `??` only checks `null` and `undefined` |    |                         |           |                                |


