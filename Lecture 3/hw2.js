/*
  Simple Star Pattern with equal rows and columns is printed here
  1 1 1
  2 2 2
  3 3 3
*/
let rows = 3
let pattern = ''
for(let i=1;i<=rows;i++){

    for(let j=1 ;j<=rows;j++){
        pattern +=i+ ' '
    }

    pattern+='\n'
}
console.log(pattern)