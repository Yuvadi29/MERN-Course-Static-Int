console.log("Aynchronous Programming");

console.log("Hi");
setTimeout(() => {
    console.log("First Callback");
}, 10000);

console.log("Hello");

setTimeout(() => {
    console.log("Second Callback");
}, 20000);