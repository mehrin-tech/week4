//even.Target and event.currentTarget
->
                                                                       

 `event.target`        - The **actual element** that triggered the event (where the event originated). 
 `event.currentTarget` - The **element the event handler is attached to** (even if event bubbles up).  



<div id="parent" style="padding:20px; background-color:lightblue;">
  Parent
  <button id="child">Click Me</button>
</div>
<script>
  const parent = document.getElementById("parent");

parent.addEventListener("click", function(event) {
  console.log("Target:", event.target);
  console.log("Current Target:", event.currentTarget);
});

</script>
event.target → <button id="child"> (the actual element clicked)

event.currentTarget → <div id="parent">  (where the listener is attached)

//event propagation
Event propagation describes how events move through the DOM tree when an event occurs — like a click, keydown, or submit.

There are three phases:

Capturing Phase (Trickling Down)
example:-
<div id="outer" style="padding: 30px; background-color: lightblue;">
  Outer Div
  <button id="inner">Click Me</button>
</div>

<script>
const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

// Listener in capture phase
outer.addEventListener("click", function () {
  console.log("Outer DIV clicked (capturing phase)");
}, true); //  true enables capturing

// Listener at the target
inner.addEventListener("click", function () {
  console.log("Button clicked (target phase)");
});


Target Phase (At the Clicked Element)
The target phase is when the event reaches the actual element that was interacted 
with (clicked, hovered, etc.). This is always between capturing and bubbling
ex:-
<div id="container" style="padding: 30px; background-color: lightblue;">
  <button id="myBtn">Click Me</button>
</div>
<script>
  const container = document.getElementById("container");
const button = document.getElementById("myBtn");

// Capturing phase
container.addEventListener("click", () => {
  console.log("Container (capturing phase)");
}, true);

// Target phase
button.addEventListener("click", () => {
  console.log("Button (target phase)");
});

// Bubbling phase
container.addEventListener("click", () => {
  console.log("Container (bubbling phase)");
});

</script>                 
{/* Container (capturing phase)
Button (target phase)
Container (bubbling phase) */}



Bubbling Phase (Bubbling Up)
<div id="parent" style="padding: 30px; background-color: lightblue;">
  Parent Div
  <button id="child">Click Me</button>
</div>
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Event listener on the button
child.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Event listener on the parent div
parent.addEventListener("click", function () {
  console.log("Parent div clicked!");                      //Button clicked!
                                                            //Parent div clicked!
});

//stop propagation
child.addEventListener("click", function (e) {
  e.stopPropagation();  // stops the bubbling
  console.log("Button clicked!");
});

*event delegation:-
Event Delegation is a technique where a single event listener is added 
to a parent element to handle events for its current or future child elements.
ex:-
<ul id="myList">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>
<script>
  document.getElementById("myList").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("You clicked:", e.target.textContent);
  }
});

</script>