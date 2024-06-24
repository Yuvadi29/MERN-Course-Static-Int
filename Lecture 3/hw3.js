/*
  Alphabetical pattern where the rows and columns are same
   A A A
   B B B
   C C C
*/
let a = 3;
let p = '';
for (let i = 0; i < a; i++) {
  for (let j = 0; j < a; j++) {
    p += String.fromCharCode(i + 65) + " ";
  }
  p += "\n";
}
console.log(p);