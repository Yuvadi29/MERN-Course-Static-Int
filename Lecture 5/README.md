# JavaScript String Methods, Objects, and Object Methods

## String Methods

JavaScript provides a variety of methods to manipulate and work with strings. Here are some commonly used string methods along with their syntax and examples.


#### 1. length

The `length` property returns the length of a string.

#### Syntax
```javascript
string.length
```

#### Example

```javascript
let str = "Hello, World!";
console.log(str.length); // Output: 13
```

#### 2. toUpperCase()

The toUpperCase() method converts a string to uppercase letters.

#### Syntax

```javascript
string.toUpperCase()
```

#### Example

```javascript
let str = "hello";
console.log(str.toUpperCase()); // Output: HELLO
```

#### 3. toLowerCase()

The toLowerCase() method converts a string to lowercase letters.

#### Syntax

```javascript
string.toLowerCase()
```

#### Example

```javascript
let str = "HELLO";
console.log(str.toLowerCase()); // Output: hello
```

#### 4. charAt()

The charAt() method returns the character at a specified index (position) in a string.

#### Syntax

```javascript
string.charAt(index)
```

#### Example

```javascript
let str = "Hello";
console.log(str.charAt(1)); // Output: e
```

#### 5. includes()

The includes() method determines whether a string contains the characters of a specified string.

#### Syntax

```javascript
string.includes(searchString, position)
```

#### Example

```javascript
let str = "Hello, World!";
console.log(str.includes("World")); // Output: true
```

#### 6. split()

The split() method splits a string into an array of substrings.

#### Syntax

```javascript
string.split(separator, limit)
```

#### Example

```javascript
let str = "Hello, World!";
let arr = str.split(", ");
console.log(arr); // Output: ["Hello", "World!"]
```

#### 7. substring()

The substring() method extracts characters from a string, between two specified indices.

#### Syntax

```javascript
string.substring(start, end)
```

#### Example

```javascript
let str = "Hello, World!";
console.log(str.substring(0, 5)); // Output: Hello
```


## Objects in JavaScript

Objects are collections of properties, and a property is an association between a name (or key) and a value. 
Values of object properties can be any data type, including other objects.

#### Creating an Object

#### Syntax

````javascript
let objectName = {
  property1: value1,
  property2: value2,
  // ...
};
````

#### Example

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.firstName); // Output: John
```

#### Accessing Object Properties

You can access object properties in two ways: dot notation or bracket notation.

#### Syntax

```javascript
    objectName.propertyName
    objectName["propertyName"]
```

#### Example

```javascript
console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe
```

#### Object Methods

Object methods are actions that can be performed on objects. Methods are stored as properties.

#### Adding a Method to an Object

#### Example

```javascript
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  getCarInfo: function() {
    return this.make + " " + this.model + " (" + this.year + ")";
  }
};
console.log(car.getCarInfo()); // Output: Toyota Camry (2020)
```

#### 1. Object.keys()
The Object.keys() method returns an array of a given object's own property names.

#### Syntax
```javascript
Object.keys(obj)
```

#### Example
```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
console.log(Object.keys(person)); // Output: ["firstName", "lastName", "age"]
```

#### 2. Object.values()
The Object.values() method returns an array of a given object's own enumerable property values.

#### Syntax
```javascript
Object.values(obj)
```

#### Example
```javascript
console.log(Object.values(person)); // Output: ["John", "Doe", 30]
```