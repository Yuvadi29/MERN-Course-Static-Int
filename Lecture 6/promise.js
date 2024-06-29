// Creating a promise
let myPromise = new Promise((resolve, reject) => {
    // Asynchronous Operation
    setTimeout(() => {
        let success = false;

        if(success){
            resolve("Operation was succesfull");
        } else{
            reject("Operation Failed");
        }
    }, 2000);
});

myPromise.then((message) => {
    console.log("Success:" + message);
}).catch((error) => {
    console.log("Error: " + error);
});