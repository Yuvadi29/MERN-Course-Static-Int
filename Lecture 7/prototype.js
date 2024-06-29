// JavaScript uses Prototypes for inheritance. Every JavaScript object has a prototype and it can intherit properties and methods from its prototype.

// Prototype Chain:
// When you try to access a property of an object, JS wil look at the object itself and then at its prototype, and then at the prototype's prototype, and so on until it finds the property or reaches the end of the prototype chain.

// Example
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function () {
//     console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old`);
// }

// const static = new Person("Static", 3);
// static.greet();

// // Prototypal inheritance
// function Employee(name, age, jobTitle) {
//     Person.call(this, name, age);
//     this.jobTitle = jobTitle;
// }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.work = function () {
//     console.log(`${this.name} is working as ${this.age}`);
// }

// const bob = new Employee("Bob", 25, "Developer");
// bob.greet();
// bob.work();

// Create a car function consisting og brand and model and add a new method called getInfo which gets the existing property.
function Car(brand, model) {
    this.brand = brand
    this.model = model
}
Car.prototype.getInfo = function () {
    console.log(`make:${this.brand} model:${this.model}`)
}
const c = new Car("Mercedes", "gsls")
c.getInfo()

// Prototype Chaining

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    return `${this.name} makes a noise`;
};

function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
    return `${this.name} barks`;
};

const dog = new Dog("Rex");
console.log(dog.speak());

// Create an object with a prototype property and access it. Take the example of area of rectangle taking length and breadth.

function rectangle(l, b) {
    this.l = l;
    this.b = b;
}

rectangle.prototype.area = function () {
    return this.l * this.b;
};

const rect = new rectangle(5, 10);
console.log(rect.area());