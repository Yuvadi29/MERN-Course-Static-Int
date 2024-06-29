# JavaScript: Ajax, Event Handling, and Error Handling

## Ajax

Ajax (Asynchronous JavaScript and XML) is a technique for creating fast and dynamic web pages. It allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes.

### Using `XMLHttpRequest`

#### Syntax

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "url", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```

#### Example

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();
```

### Using Fetch API

#### Syntax

```javascript
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

#### Example

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

## Event Handling

JavaScript allows you to execute code when events are detected. You can add event listeners to HTML elements to respond to events like clicks, mouseovers, and key presses.

### Adding Event Listeners

#### Syntax

```javascript
element.addEventListener(event, function, useCapture);
```

#### Example

```javascript
document.getElementById("myButton").addEventListener("click", function () {
  alert("Button clicked!");
});
```

### Event Object

When an event occurs, an event object is created. This object contains properties and methods related to the event.

#### Syntax

```javascript
document.getElementById("myButton").addEventListener("click", function (event) {
  console.log("Event type: " + event.type);
  console.log("Element ID: " + event.target.id);
});
```

## Error Handling

Error handling in JavaScript is done using try, catch, throw, and finally statements.

### `try...catch`

#### Syntax

```javascript
try {
  // Block of code to try
} catch (err) {
  // Block of code to handle errors
} finally {
  // Block of code to be executed regardless of the try / catch result
}
```

#### Example

```javascript
try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("An error occurred: " + error.message);
} finally {
  console.log("This is always executed");
}
```

### Throwing Errors

You can use the throw statement to create custom errors.

#### Syntax

```javascript
throw new Error("Something went wrong");
```

#### Example

```javascript
function checkNumber(num) {
  if (num > 10) {
    throw new Error("Number is too large");
  }
  return num;
}

try {
  console.log(checkNumber(15));
} catch (error) {
  console.error("Caught an error: " + error.message);
}
```
