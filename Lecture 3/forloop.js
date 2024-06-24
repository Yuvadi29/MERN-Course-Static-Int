// Print number from 1 to 10

// for (let i = 1; i <= 10 ; i++) {
//     console.log(i);
// }

// Print all the numbers divisible by 2
// for (let j = 0; j <= 10; j++) {
//     if (j % 2 == 0) {
//         console.log(j);
//     }
// }

// for (let k = 0; k <= 10; k += 3) {
//     console.log(k);
// }

/* Print the pattern
*
* *
* * *
* * * *
* * * * *
*/

// let n = 5;
// for (let l = 1; l <= n; l++) {
//     let str = "*";
//     console.log(str.repeat(l));
// }

// let string = "";
// for (let a = 1; a <= 5; a++) {
//     for (let b = 0; b < a; b++) {
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// Print the pattern
/*

* * * *
* * *
* * 
*
 */

let m = 4
let string2 = "";
for (let c = 0; c < m; c++) {
    for(let d = 0; d < m - c; d++ ){
        string2 += "*";
    }
    string2 += "\n";
}
console.log(string2);