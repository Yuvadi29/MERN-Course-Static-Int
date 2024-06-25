let arrayName = [1, 2, 3];
console.log(typeof (arrayName));
console.log("Initializing an array: ", arrayName);

let cars = ["BMW", "Porsche", "Toyota", "Audi", "Maruti Suzuki"];
console.log(cars);

let brand = ["Iphone", 14, 4.5, "India"];
console.log(brand);
console.log(cars[3]);
console.log(brand[2]);

const arrOfObj = [
    iphone = {
        model: "14 Pro Max",
        price: 75000,
    },
    samsung = {
        model: "s20 Ultra",
        price: 60000,
    },
    oppo = {
        model: "f9 Pro",
        price: 20000,
    },
    onePlus = {
        model: "2T",
        price: 25000,
    }
];
console.log(arrOfObj[3].model);
console.log(arrOfObj[3].price);


let fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits);
console.log(fruits.length);

// Create an array of 4 elements and add 6 other elements of different datatype

let arr1 = ["apple", 10, 14.5, "cherry",]
arr1.push("banana", "mango", 20, 20.6)
arr1.push(iphone = [{
    model: "Iphone 11",
    price: 40000,
}]);
console.log(arr1);

let house = ["Lodha", "Hiranandani", "Agarwal"];
let lastHouse = house.pop();
console.log(lastHouse);
console.log(house);

//Create an array of 10 elements and remove the last 4 elements
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 1; i <= 4; i++) {
    array2.pop()
}
console.log(array2);


// Create an array of 10 elements using for loop
let c = []
for (i = 1; i <= 10; i++) {
    c.push(i);
}
console.log(c);

// Create an array of the table of 2
let a = []
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        a.push(i);
    }

}
console.log(a);

// Create an array of prime numbers till 10

let fruits2 = ["Apple", "Banana"];
let moreFruits = ["Cherry", "Date"];
let allFruits = fruits2.concat(moreFruits);
console.log(allFruits);

let newArr = [5, 4, 3, 2, 1];
console.log(newArr.sort());

// Create 2 arrays, one with the name oddArr consisting of 1,3,5,7 and other with the name evenArr consisting of 2,4,6,8. Combine both the arrays and return the sorted array.
let odd = [1, 3, 5, 7];
let even = [2, 4, 6, 8];
let number = odd.concat(even).sort();
console.log(number);


let fruits3 = ["Apple", "Banana", "Cherry", "Date"];
let citrus = fruits3.slice(1, 4);
let citrus2 = fruits3.slice();
let citrus3 = fruits3.slice(1);
console.log(citrus);
console.log(citrus2);
console.log(citrus3);

let watch = ["Apple Watch", "Fossil", "Titan", "G-Shock"];
watch.forEach(function (watch) {
    console.log(watch);
});

let numbers = [1, 2, 3];
let doubled = numbers.map(function (number) {
    return number * 2;
});
console.log(doubled);

let newNum = [1, 4, 9, 16, 25];
const sqRoots = newNum.map(num => Math.sqrt(num));
console.log(sqRoots);

let strings = ["10", "20", "30"];
const convertToInt = strings.map(str => parseInt(str));
console.log(convertToInt);

let numbers1 = [1, 2, 3, 4, 5];
let evenNumbers = numbers1.filter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbers);

let fruits4 = ["Apple", "Banana", "Cherry"];
let fruitString = fruits4.join(" - ");
console.log(fruitString);

// Create an array of all the prime numbers till 10 and display them seperated by a comma and new line
let pn = [2, 3, 5, 7];
let pnc = pn.join(',');
console.log(pnc);

let pnn = pn.join('\n');
console.log(pnn);

let numbers4 = [1, 2, 3, 4, 5];
let sum = numbers4.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 1);
console.log(sum);

// Using reduce method, return the product of all the elements in array