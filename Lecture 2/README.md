# JavaScript Basics: Event Loop, Basic I/O, and Control Statements

This document will provide you with essential notes on the event loop, basic I/O operations, and control statements in JavaScript.

## Table of Contents

1. [Event Loop](#event-loop)
2. [Basic I/O](#basic-io)
3. [Control Statements](#control-statements)

## Event Loop

The event loop is a fundamental concept in JavaScript, enabling non-blocking asynchronous operations. JavaScript is single-threaded, meaning it can execute one task at a time. The event loop allows JavaScript to perform non-blocking I/O operations despite its single-threaded nature.

### How It Works

1. **Call Stack**: Where the code is executed.
2. **Web APIs**: Browser-provided APIs (like `setTimeout`, `DOM events`) handle asynchronous tasks.
3. **Callback Queue**: Holds callbacks ready to be executed.
4. **Event Loop**: Monitors the call stack and the callback queue. If the call stack is empty, the event loop pushes the first callback from the queue to the call stack.

### Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Callback");
}, 1000);

console.log("End");

// Output:
// Start
// End
// Callback (after 1 second)
```

## Basic I/O

Input and output operations in JavaScript are typically handled through the browser's DOM API for client-side code or through Node.js for server-side code.

## Client-Side I/O

1. Input: Interacting with the user through forms, buttons, or other input elements.
2. Output: Displaying information to the user through the DOM.

```html
<!DOCTYPE html>
<html>
  <body>
    <input type="text" id="userInput" placeholder="Type something" />
    <button onclick="showInput()">Submit</button>

    <p id="output"></p>

    <script>
      function showInput() {
        let input = document.getElementById("userInput").value;
        document.getElementById("output").innerText = input;
      }
    </script>
  </body>
</html>
```

## Server-Side I/O (Node.js)

1. Input: Reading from files, receiving network requests.
2. Output: Writing to files, sending network responses.

```javascript
const fs = require("fs");

// Read from a file
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write to a file
fs.writeFile("output.txt", "Hello, World!", (err) => {
  if (err) throw err;
  console.log("File has been written");
});
```

## Control Statements

Control statements allow you to dictate the flow of your JavaScript code based on conditions and loops.

### Conditional Statements

if...else

```javascript
let x = 10;

if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is not greater than 5");
}
```

switch

```javascript
let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("This is a banana.");
    break;
  case "apple":
    console.log("This is an apple.");
    break;
  default:
    console.log("Unknown fruit.");
}
```

## Looping Statements

for Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

while loop

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

do...while loop

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

## Control Flow Keywords

1. **break**: Exits a loop or switch statement.
   ```javascript
   for (let i = 0; i < 10; i++) {
     if (i === 5) {
       break;
     }
     console.log(i); // Logs 0 to 4
   }
   ```
2. **continue**: Skips the current iteration of a loop.
   ```javascript
   for (let i = 0; i < 10; i++) {
     if (i === 5) {
       continue;
     }
     console.log(i); // Logs 0 to 9 except 5
   }
   ```
