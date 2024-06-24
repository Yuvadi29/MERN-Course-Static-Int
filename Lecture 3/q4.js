/*
  Simple Star Pattern with equal rows and columns is printed here
  1
  2 2
  3 3 3
  4 4 4 4
*/

let rows = 4;
let pattern = "";

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += i + " ";
  }
  pattern += "\n";
}
console.log(pattern);