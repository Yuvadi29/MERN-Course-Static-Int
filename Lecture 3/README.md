# JavaScript Loops

Loops are used in JavaScript to perform repeated tasks based on a condition. Conditions typically return true or false when evaluated. The loop will continue to run as long as the condition returns true. JavaScript supports several types of loops:

## Types of Loops

### 1. for Loop

The for loop is used to run a block of code a specified number of times. It is the most commonly used loop in JavaScript.

#### Syntax

```javascript
for (initialization; condition; increment) {
  // code block to be executed
}
```


Example

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}
```


### 2. while Loop

The while loop repeats a block of code as long as the specified condition is true.

#### Syntax

```javascript
while (condition) {
  // code block to be executed
}
```

Example

```javascript
let i = 0;
while (i < 5) {
  console.log(i); // Output: 0, 1, 2, 3, 4
  i++;
}
```


### 3. do...while Loop

The do...while loop is similar to the while loop, but it will execute the code block once before checking the condition.

#### Syntax

```javascript
do {
  // code block to be executed
} while (condition);
```

Example

```javascript
let i = 0;
do {
  console.log(i); // Output: 0, 1, 2, 3, 4
  i++;
} while (i < 5);
```

### 4. for...in Loop

The for...in loop is used to iterate over the properties of an object.

#### Syntax

```javascript
for (variable in object) {
  // code block to be executed
}
```

Example

```javascript
const person = { fname: "John", lname: "Doe", age: 25 };
for (let key in person) {
  console.log(key + ": " + person[key]); // Output: fname: John, lname: Doe, age: 25
}
```


### 5. for...of Loop

The for...of loop is used to iterate over iterable objects (arrays, strings, maps, sets, etc.).

#### Syntax

```javascript
for (variable of iterable) {
  // code block to be executed
}
```

Example

```javascript
const array = [1, 2, 3, 4, 5];
for (let value of array) {
  console.log(value); // Output: 1, 2, 3, 4, 5
}
```

### Functions

Functions are reusable blocks of code that perform a specific task. They help in organizing the code and avoiding repetition.

## Function Declaration

A function declaration defines a named function.

#### Syntax

```javascript
function functionName(parameters) {
  // code block to be executed
}
```

#### Example

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
```


### Function Expression

A function expression defines a function as part of a larger expression, typically a variable assignment.

#### Syntax

```javascript
const functionName = function (parameters) {
  // code block to be executed
};
```

#### Example

```javascript
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("Bob")); // Output: Hello, Bob!
```

### Arrow Functions

Arrow functions provide a shorter syntax for writing functions and do not have their own this.

#### Syntax

```javascript
const functionName = (parameters) => {
  // code block to be executed
};
```

#### Example

```javascript
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Charlie")); // Output: Hello, Charlie!
```

### Scope

Scope determines the accessibility of variables and functions in different parts of the code. JavaScript has three types of scope:

#### Global Scope

Variables declared outside any function are in the global scope and can be accessed from anywhere in the code.

#### Example

```javascript
let globalVar = "I am global";

function accessGlobal() {
  console.log(globalVar);
}

accessGlobal(); // Output: I am global
console.log(globalVar); // Output: I am global
```

#### Function Scope

Variables declared within a function are in the function scope and can only be accessed within that function.

#### Example

```javascript
function myFunction() {
  let functionVar = "I am local";
  console.log(functionVar);
}

myFunction(); // Output: I am local
console.log(functionVar); // Error: functionVar is not defined
```