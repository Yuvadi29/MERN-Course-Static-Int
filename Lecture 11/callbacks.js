// A callback is a function passed as an argument to another function
// function myDisplay(something) {
//     document.getElementById("demo").innerHTML = something;
// }

// function myCalculator(num1, num2, mycallBack) {
//     let sum = num1 + num2;
//     mycallBack(sum);
// }

// myCalculator(5, 5, myDisplay);

// Callback with Array
// function forEachElement(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i);
//     }
// }

// forEachElement([1, 2, 3], (element, index) => {
//     console.log(`Element ${index}: ${element * 2}`);
// });

// Create an array. Call a removeNeg function with a callback and display the result.
const numbers = [4, 1, -20, -7, 5, 9, -6];

const posiNum = removeNeg(numbers, (x) => x >= 0);

document.getElementById("demo").innerHTML = posiNum;

function removeNeg(numbers, callback) {
    const myArr = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArr.push(x);
        }
    }
    return myArr;
}