const person = { fname: "John", lname: "Doe", age: 25 };
for (let key in person) {
    console.log(key + ": " + person[key]);
}