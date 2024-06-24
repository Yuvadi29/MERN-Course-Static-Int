/*
  Alphabetical pattern 
  A
  A B
  A B C
  A B C D
  A B C D E
  
*/

let n = 5;
let pattern = "";

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    pattern += String.fromCharCode(j + 65)+" ";

  }
  pattern += "\n";
}
console.log(pattern);