//RELATION BTW WINDOW,GLOBAL OBJECT AND THE DOM
//WINDOW
The window object is the global object in the browser environment.
var mainly attached to window,but let const not attached to window.
It represents the browser window/tab and gives access:-

Browser APIs (e.g., alert(), prompt(), confirm())

Global variables and functions

The DOM (document)

Timers (setTimeout, setInterval)

Location, history, screen, and more

Every global variable or function you create (without let, const, or var) becomes a property of window.

->PROPERTIES OF WINDOW Object
//DOM Acess
1)window.document
Represents the DOM (webpage structure)
*window.frames

//Browser info
2)window.location
https://www.example.com:8080/products/index.html?category=books#reviews
* window.location.href:-   full URL  ->   https://www.example.com:8080/products/index.html?category=books#reviews
*window.location.protocol:-	The protocol used (HTTP/HTTPS)	-> "https:"
*window.location.host:-	Hostname + port number (if any) ->	"www.example.com:8080"
*window.location.hostname:-	Just the domain name ->  	"www.example.com"
*window.location.port:-	Port number (empty if default port is used) ->	"8080"
*window.location.pathname:-	Path of the file or resource ->	"/products/index.html"
*window.location.search:-	Query string (starts with ?) ->	"?category=books"
*window.location.hash:-	Fragment identifier (starts with #) ->	"#reviews"

3) window.navigator:-
provide informations about the browser
//window SIZE
4)window.screen (innerWidth,innerHeight)

innerWidth → width of the browser window excluding toolbars, scrollbars, etc.

innerHeight → height of the browser window's content area.

//   console.log("Inner Width:", window.innerWidth);
//   console.log("Inner Height:", window.innerHeight);

5)window.nameWindow
{/* <script>
  // Set the name
  window.name = "Mehrin's Tab";
                                       
  // Access it
  console.log("Window Name:", window.name);
</script> */}

// Name: Mehrin's Tab
//storage
6) window.localStorage :-
	Stores data in the browser as key -value pairs permanently 
7) window.sessionstorage :-
data stores in the browser temporarly

 Task            - Method                               
  
 Store data      - `sessionStorage.setItem(key, value)` 
 Retrieve data   - `sessionStorage.getItem(key)`        
 Remove an item  - `sessionStorage.removeItem(key)`     
 Clear all items - `sessionStorage.clear()` 
 ---------------------------------------------------------------
 ---->METHODS OF WINDOW Object

 ->Dialogs: alert(), confirm(), prompt()
alert('')
const res=confirm("yes or no")
console.log(res) //true if OK, false If cancel  .show a mesg ok or cancel button
const name = prompt("What is your name?"); //Asks for input with a text field, OK and Cancel buttons.
console.log("User entered:", name);

//TIMer
1)setTimeout()
Runs a function once after a specified delay (in milliseconds).

//use
//  <script>
//   function greetUser() {
//     alert("Hello after 3 seconds!");
//   }

//   setTimeout(greetUser, 3000); // Runs greetUser after 3 seconds
// </script>

Show a message after 2 seconds

Load something after a delay

 2)setInterval()
Runs a function repeatedly at every specified interval (in milliseconds).

// use
Use when you want something to happen again and again, 

Updating a clock

Repeating animations

Auto-saving content
 <script>
  function showTime() {
    const now = new Date().toLocaleTimeString();
    console.log("Current Time:", now);
  }

  setInterval(showTime, 1000); // Logs the time every 1 second
</script>
output:-Current Time: 1:26:15 pm
example.html:13 Current Time: 1:26:16 pm
example.html:13 Current Time: 1:26:17 pm
example.html:13 Current Time: 1:26:18 pm
example.html:13 Current Time: 1:26:19 pm
example.html:13 Current Time: 1:26:20 pm

3)clearTimeout(id) / clearInterval(id)
Stops a timer created with setTimeout or setInterval



4)open(url)
Opens a new browser tab or window
<button onclick="openGoogle()">Open Google</button>

<script>
  function openGoogle() {
    window.open("https://www.google.com", "_blank"); // Opens Google in a new tab
  }
</script>

5)close()
Closes the current window (only if it was opened by script)
6)scrollTo(x, y)
Scrolls the page to a specific coordinate
{/* <button onclick="scrollToBottom()">Scroll to Bottom</button>

<div style="height: 2000px; background: linear-gradient(#fff, #ddd);"></div>

<script>
  function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }
</script> */}

7) addEventListener(event, handler)
Adds an event listener to the window
8)print()
Opens the print dialog
9)focus() and blur()
Focuses or removes focus from the window

  //DOM = A tree-like structure of the web page that JavaScript can control using window.document.

   ->VISUAL SUMMARY IN BROWSER
 Browser Environment
└── window (Global Object)
    ├── 🌐 Browser APIs
    │   ├── console
    │   │   ├── log()
    │   │   └── error(), warn(), etc.
    │   ├── location
    │   ├── history
    │   └── navigator
    │
    ├── 🧱 Built-in Functions
    │   ├── alert()
    │   ├── prompt()
    │   ├── confirm()
    │   ├── setTimeout()
    │   └── setInterval()
    │
    ├──  DOM Access
    │      document
    │        body
    │        getElementById()
    │        querySelector()
    │
    ├─ Global Variables (via `var`)
        var x = 5     → window.x = 5
       function sayHi() { } → window.sayHi



