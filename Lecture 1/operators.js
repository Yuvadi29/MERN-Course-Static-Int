console.log("Arithmatic Operators");

let sum = 10 + 5;
console.log(sum);

let difference = 10 - 5;
console.log(difference);

let product = 15 * 5;
console.log(product);

let quotient = 10 / 3;
console.log(quotient);

let remainder = 10 % 6;
console.log(remainder);

let power = 2 ** 3;
console.log(power);

console.log("Assignment Operators");

let x = 10;
console.log(x);

x += 10;
console.log(x);

let y = 30;
y -= 8;
console.log(y);

x *= 10;
console.log(x);

y /= 10;
console.log(y);

x %= 5;
console.log(x);

console.log("Comparison Operators");

let op1 = 18;
let op2 = 18;
console.log(op1 == op2);
console.log(op1 === op2);
console.log(op1 != op2);
console.log(op1 !== op2);
console.log(op1 > op2);
console.log(op1 < op2);
console.log(op1 >= op2);
console.log(op1 <= op2);


console.log("Logical Operators");
let x = true;
let y = false;

let andResult = x && y;
console.log(andResult);
let orResult = x || y; 
console.log(orResult);
let notResult = !x; 
console.log(notResult);

console.log("Bitwise Operators: ");

let a = 5; // 0101 in binary
let b = 3; // 0011 in binary
let andResult = a & b; // 0001 (1 in decimal)
console.log(andResult);
let orResult = a | b; // 0111 (7 in decimal)
console.log(orResult);
let xorResult = a ^ b; // 0110 (6 in decimal)
console.log(xorResult);
let notResult = ~a; 
console.log(notResult);
let leftShift = a << 1; // 1010 (10 in decimal)
console.log(leftShift);
let rightShift = a >> 1; // 0010 (2 in decimal)
console.log(rightShift);

console.log("TypeOf");

let newVar = "Coding";
let newVar1 = "55";
let newVar2 = true;
let newVar3 = [2,3,5,4];

console.log(typeof(newVar));
console.log(typeof(newVar1));
console.log(typeof(newVar2));
console.log(typeof(newVar3));
