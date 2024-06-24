//   Simple Star Pattern with equal rows and columns is printed here
//   * * *
//   * * *
//   * * *
let rows = 3
let pattern = ''
for(let i=1;i<=rows;i++){

    for(let j=1 ;j<=rows;j++){
        pattern += '* '
    }

    pattern+='\n'
}
console.log(pattern)