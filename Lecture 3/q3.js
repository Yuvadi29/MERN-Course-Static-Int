/*
  Simple Star Pattern with equal rows and columns is printed here
  1
  2 3
  4 5 6
  7 8 9 10
*/

let rows = 4;
let variable = 1;
let pattern = "";

for (let e = 1; e <= rows; e++) {
  for (let f = 1; f <= e; f++) {
    pattern += variable + " ";
    variable++;
  }
  pattern += "\n";
}
console.log(pattern);