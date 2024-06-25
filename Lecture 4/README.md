# JavaScript Arrays, Array Methods

Arrays and objects are fundamental data structures in JavaScript, allowing developers to store, manipulate, and retrieve data efficiently. 

## Arrays

Arrays are ordered collection of items, which can be of any type. Each item in an array has an index, starting from 0.

### Creating an Array

#### Syntax

```javascript
let arrayName = [item1, item2, item3];
```


Example

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
```


### Array Methods

JavaScript provides several built-in methods to work with arrays. Here are some of the most commonly used methods:

#### 1. push()

Adds one or more elements to the end of an array and returns the new length of the array.


#### Syntax
```javascript
array.push(element1, ..., elementN);
```

#### Example

```javascript
let fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits);
```

#### 2. pop()

Removes the last element from an array and returns that element.

#### Syntax

```javascript
array.pop();
```

#### Example

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: "Cherry"
console.log(fruits); // Output: ["Apple", "Banana"]
```

#### 3. concat()

Merges two or more arrays into one and returns a new array.

#### Syntax

```javascript
let newArray = array1.concat(array2, ..., arrayN);
```

#### Example

```javascript
let fruits = ["Apple", "Banana"];
let moreFruits = ["Cherry", "Date"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["Apple", "Banana", "Cherry", "Date"]
```

#### 4. slice()

Returns a shallow copy of a portion of an array into a new array.

#### Syntax

```javascript
let newArray = array.slice(start, end);
```

#### Example

```javascript
let fruits = ["Apple", "Banana", "Cherry", "Date"];
let citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ["Banana", "Cherry"]
```

#### 5. forEach()

Executes a provided function once for each array element.

#### Syntax

```javascript
array.forEach(function(element) {
  // code block to be executed
});
```

#### Example

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function(fruit) {
  console.log(fruit);
});
// Output: 
// "Apple"
// "Banana"
// "Cherry"
```

#### 6. map()

Creates a new array with the results of calling a provided function on every element in the array.

#### Syntax

```javascript
let newArray = array.map(function(element) {
  // code block to be executed
});
```

#### Example

```javascript
let numbers = [1, 2, 3];
let doubled = numbers.map(function(number) {
  return number * 2;
});
console.log(doubled); // Output: [2, 4, 6]
```

#### 7. filter()

Creates a new array with all elements that pass the test implemented by the provided function.

#### Syntax

```javascript
let newArray = array.filter(function(element) {
  // code block to be executed
});
```

#### Example

```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]
```

#### 8. sort()

It sorts the elements of the array.

#### Syntax

````javascript
arr.sort()
````

#### Example

```javascript
let myArr = [5,4,6,2,1];
console.log(myArr.sort());
```

#### 9. join()

The join() method creates and returns a new string by concatenating all the elements in an array, separated by a specified separator string. If no separator is provided, a comma (,) is used by default.

#### Syntax

```javascript
    array.join(separator);
```

#### Example

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
let fruitString = fruits.join(" - ");
console.log(fruitString); // Output: "Apple - Banana - Cherry"
```

#### 10. reduce()

The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. The reduce() method applies the function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

#### Syntax

```javascript
    array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
```

callback: A function to execute on each element in the array, taking four arguments:
accumulator: The accumulator accumulates the callback's return values.
currentValue: The current element being processed in the array.
currentIndex (optional): The index of the current element being processed in the array.
array (optional): The array reduce() was called upon.
initialValue (optional): A value to use as the first argument to the first call of the callback.

#### Example

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15
```