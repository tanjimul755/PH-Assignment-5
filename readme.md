### Answers of the following questions are given below: <br>

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**<br>
   <b>Ans:</b><br>
   In javascript we use "getElementById" to Select an element by its unique id, we use "getElementsByClassName" to select elements by their class name. we use "querySelector" to select element that matches a CSS selector & "querySelectorAll" to select all elements that match a CSS selector.

2. How do you **create and insert a new element into the DOM**?<br>
   <b>Ans:</b><br>
   Const parent = document.createElement('div');
   document.body.appendChild(parent);

   Const h1 = document.createElement('h1');
   h1.innerText = "Bangladesh";
   parent.appendChild(h1);

3. What is **Event Bubbling** and how does it work?<br>
   <b>Ans:</b><br>
   Event Bubbling is a process in javascript where an event starts on the tergeted element that triggered it and then propagates to its parent elements, all the way up to the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?<br>
   <b>Ans:</b><br>
   Event delegation means putting one event listener on a parent element to handle events for all its child elements.

   Why it’s useful:
   a) Saves memory because fewer event listeners.
   b) It works on new elements without adding extra listeners.
   c) Cleaner and shorter code,

5. What is the difference between **preventDefault() and stopPropagation()** methods?<br>
   <b>Ans:</b><br>
   "preventDefault()" it allows browser to prevent the default behavior from occuring on an event, on the other hand, "stopPropagation()" stops the event from moving up to parent elements.
