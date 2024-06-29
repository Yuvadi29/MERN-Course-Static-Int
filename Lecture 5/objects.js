let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.firstName);
console.log(person.fullName());

// Create an object and pass all the datatypes as key value pairs and print them

let object1 = {
    string: "String",
    num: 10,
    bool: true,
    arr: [1, 2, 3, 4, 5],
    nul: null,
    undef: undefined,
    obj: {
        key1: "val"
    },
};

console.log(object1);
// console.log(object1.string, object1.num, object1.bool, object1.arr, object1.nul, object1.undef, object1.obj);

console.log(person.firstName);
console.log(person["lastName"]);

console.log(Object.keys(object1));
console.log(Object.values(object1));

// Create an object consisting keys:firstName, lastName, age, location, hobby, and a function which returns the following sentence: My name is {firstName} {lastName}. I am {age} years old and i stay in {location},and i like to {hobby}. Also print the keys and values of the objects



let p1 = {
    first: "siddhi",
    last: "pawar",
    age: 17,
    location: "mumbai",
    hobby: "sleeping",
    allname: function () {
        return console.log("my name is " + this.first + " " + this.last, "\ni m " + this.age + " years old \n i stay in " + this.location + " \nand i like " + this.hobby)
    }
}

console.log(p1.allname());