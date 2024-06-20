# JavaScript Basics: Variables, Data Types, Operators, and Expressions

Welcome to the JavaScript basics guide! This document will provide you with essential notes on variables, data types, operators, and expressions in JavaScript.

## Table of Contents

1. [Variables](#variables)
2. [Data Types](#data-types)
3. [Operators](#operators)
4. [Expressions](#expressions)

## Variables

Variables are containers for storing data values. In JavaScript, you can declare a variable using `var`, `let`, or `const`.

### Declaration

- **var**: The `var` keyword declares a variable. It has function scope and can be redeclared.

  ```javascript
  var name = "John";
  var age = 25;
  ```

- **let**: The `let` keyword declares a block-scoped variable. It cannot be redeclared within the same scope.

  ```javascript
  let city = "New York";
  let age = 30;
  ```

- **const**: The `const` keyword declares a block-scoped, read-only constant. It must be initialized at the time of declaration.
  ```javascript
  const country = "USA";
  const PI = 3.14;
  ```

## Data Types

JavaScript supports different data types, including both primitive and non-primitive types.

### Primitive Data Types

1. **Number**: Represents both integer and floating-point numbers.

   ```javascript
   let number = 42;
   let price = 99.99;
   ```

2. **String**: Represents a sequence of characters.

   ```javascript
   let greeting = "Hello, world!";
   ```

3. **Boolean**: Represents a logical entity and can have two values: `true` and `false`.

   ```javascript
   let isAvailable = true;
   ```

4. **Undefined**: A variable that has been declared but not assigned a value.

   ```javascript
   let notDefined;
   ```

5. **Null**: Represents the intentional absence of any object value.

   ```javascript
   let emptyValue = null;
   ```

6. **Symbol**: A unique and immutable value.
   ```javascript
   let symbol = Symbol("symbol");
   ```

### Non-Primitive Data Types

1. **Object**: A collection of properties and methods.

   ```javascript
   let person = {
     name: "John",
     age: 25,
   };
   ```

2. **Array**: An ordered list of values.
   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   ```

## Operators

Operators are used to perform operations on variables and values.

### Arithmetic Operators

- `+` : Addition
- `-` : Subtraction
- `*` : Multiplication
- `/` : Division
- `%` : Modulus (Remainder)
- `**` : Exponentiation

  ```javascript
  let sum = 10 + 5; // 15
  let difference = 10 - 5; // 5
  let product = 10 * 5; // 50
  let quotient = 10 / 5; // 2
  let remainder = 10 % 3; // 1
  let power = 2 ** 3; // 8
  ```

### Assignment Operators

- `=` : Assignment
- `+=` : Addition assignment
- `-=` : Subtraction assignment
- `*=` : Multiplication assignment
- `/=` : Division assignment
- `%=` : Modulus assignment

  ```javascript
  let x = 10;
  x += 5; // 15
  x -= 3; // 12
  x *= 2; // 24
  x /= 4; // 6
  x %= 2; // 0
  ```

### Comparison Operators

- `==` : Equal to
- `===` : Strict equal to
- `!=` : Not equal to
- `!==` : Strict not equal to
- `>` : Greater than
- `<` : Less than
- `>=` : Greater than or equal to
- `<=` : Less than or equal to

  ```javascript
  let a = 5;
  let b = 10;
  let isEqual = a == b; // false
  let isStrictEqual = a === b; // false
  let isNotEqual = a != b; // true
  let isStrictNotEqual = a !== b; // true
  let isGreaterThan = a > b; // false
  let isLessThan = a < b; // true
  let isGreaterThanOrEqual = a >= b; // false
  let isLessThanOrEqual = a <= b; // true
  ```

### Logical Operators

- `&&` : Logical AND
- `||` : Logical OR
- `!` : Logical NOT

  ```javascript
  let x = true;
  let y = false;
  let andResult = x && y; // false
  let orResult = x || y; // true
  let notResult = !x; // false
  ```

### Bitwise Operators (Works for Binary Operation)

- `&` : AND
- `|` : OR
- `^` : XOR
- `~` : NOT
- `<<` : Left shift
- `>>` : Right shift
- `>>>` : Zero-fill right shift

  ```javascript
  let a = 5; // 0101 in binary
  let b = 3; // 0011 in binary
  let andResult = a & b; // 0001 (1 in decimal)
  let orResult = a | b; // 0111 (7 in decimal)
  let xorResult = a ^ b; // 0110 (6 in decimal)
  let notResult = ~a; // 1010 (10 in decimal, but signed integer so -6)
  let leftShift = a << 1; // 1010 (10 in decimal)
  let rightShift = a >> 1; // 0010 (2 in decimal)
  let zeroFillRightShift = a >>> 1; // 0010 (2 in decimal)
  ```

### Other Operators

- `typeof` : Returns the type of a variable

  ```javascript
  let x = 42;
  typeof x; // "number"
  ```

- `instanceof` : Returns true if an object is an instance of an object type
  ```javascript
  let date = new Date();
  date instanceof Date; // true
  ```

## Expressions

Expressions are combinations of values, variables, and operators that compute to a value.

### Arithmetic Expressions

```javascript
let result = (10 + 5) * 2; // 30
```

### String Expressions

```javascript
let fullName = "John" + " " + "Doe"; // "John Doe"
```

### Logical Expressions

```javascript
let isAdult = age > 18 && age < 65; // true or false
```

### Conditional (Ternary) Expressions

```javascript
let age = 20;
let canVote = age >= 18 ? "Yes" : "No"; // "Yes"
```
