# JavaScript: Closures and Prototypes

## Closures

A closure is a function that retains access to its lexical scope even when the function is executed outside that scope. Closures are an important concept in JavaScript and are used extensively in advanced programming techniques.

#### Example

```javascript
function outerFunction() {
  let outerVariable = "I'm an outer variable";

  function innerFunction() {
    console.log(outerVariable); // Can access outerVariable
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // Output: I'm an outer variable
```

### Uses of Closures

1. Data Privacy: Closures can be used to create private variables.
2. Function Currying: They can be used to create partially applied functions.
3. Event Handlers and Callbacks: Closures are commonly used in event handling.

### Private Variables Example

```javascript
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1
console.log(counter.getCount()); // Output: 1
```

### Prototypes

JavaScript uses prototypes for inheritance. Every JavaScript object has a prototype, and it can inherit properties and methods from its prototype.

### Prototype Chain

When you try to access a property of an object, JavaScript will look at the object itself and then at its prototype, and then at the prototype's prototype, and so on until it finds the property or reaches the end of the prototype chain.

#### Example

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const alice = new Person("Alice", 30);
alice.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

## Adding Properties and Methods to Prototypes

You can add new properties and methods to existing prototype objects.

### Example

```javascript
Person.prototype.sayGoodbye = function () {
  console.log(`${this.name} says goodbye!`);
};

alice.sayGoodbye(); // Output: Alice says goodbye!
```

### Prototypal Inheritance

Objects can inherit from other objects, allowing for shared properties and methods.

#### Example

```javascript
function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function () {
  console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

const bob = new Employee("Bob", 25, "Developer");
bob.greet(); // Output: Hello, my name is Bob and I am 25 years old.
bob.work(); // Output: Bob is working as a Developer.
```
