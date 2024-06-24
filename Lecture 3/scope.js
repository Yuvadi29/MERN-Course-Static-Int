let globalVar = "I am global";

function accessGlobal() {
    console.log(globalVar);
}

accessGlobal(); // Output: I am global
console.log(globalVar);

function myFunction() {
    let functionVar = "I am local";
    console.log(functionVar);
}

myFunction(); // Output: I am local
// console.log(functionVar);