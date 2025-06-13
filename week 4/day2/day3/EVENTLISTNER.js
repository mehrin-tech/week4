 //Addeventlistners 

    addEventListener is a method used to attach an event handler
    *it supports multiple listners 
    <button id="myBtn">Click me</button>

<script>
  const btn = document.getElementById("myBtn");

  function handleClick() {
    alert("Button was clicked!");
  }

  btn.addEventListener("click", handleClick);
</script>

    //  removing listners
    To remove an event listener
    <button id="myBtn">Click me</button>

<script>
  const btn = document.getElementById("myBtn");

  function handleClick() {
    alert("Clicked!");
  }

  btn.addEventListener("click", handleClick);

  // Removing after 3 seconds
  setTimeout(() => {
    btn.removeEventListener("click", handleClick);
    alert("Click event removed.");
  }, 3000);
</script>