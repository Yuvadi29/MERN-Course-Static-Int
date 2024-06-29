let str1 = "Static";
console.log(typeof (str1));
console.log(str1.length)

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// Write something about your favorite actor and convert the sentence into upper and lowercase and find out the length 

let str2 = "Hello World";
console.log(str2.charAt(5));
console.log(str2.charAt(4).toUpperCase());
console.log(str2.charAt(6).toLowerCase());


// Consider the string "Static Int Educare", convert it into lower case and print the characters at odd and even indexes seperately
let str3 = "Static Int Educare".toLowerCase();

let oddIndex = "";
let evenIndex = "";

for (let i = 0; i < str3.length; i++) {
    if (i % 2 == 0) {
        evenIndex += str3[i];
    } else {
        oddIndex += str3[i];
    }
}

console.log("Even Characters: ", evenIndex);
console.log("Odd Characters: ", oddIndex);

// Consider the following sentence and print all the characters at the indexes."My name is {Your Name}". It should be printed as 'Character at index 0 is M, Character at index 1 is y, ....'
let name = "my name is saksham"
let character = "";

for (let i = 0; i < name.length; i++) {
    character += name.charAt(i);
    console.log("character at index" + i + ":", character[i]);
}

let str = "Hello, World!";
console.log(str.includes("e", 1));
console.log(str.includes("World"));

/*
    Consider the following sentence:
    "JavaScript bohot confusing hai bhai."

    and count the occurence of letter a.
*/

let str4 = 'Javascript bohot confusing hai bhai';
let c = 0;

for (i = 0; i < str4.length; i++) {
    if (str4[i].includes('a')) {
        c++;
    }
}
console.log(c);

let str5 = "Hello ,World!";
let arr = str5.split();
console.log(arr)

let str6 = "Hello, World!";
console.log(str6.substring(0, 5));

let str7 = "    Hello World    !";
console.log(str7.trim());
console.log(str7.trimStart());
console.log(str7.trimEnd());

let str8 = "Mind, Power, Soul";
let part = str8.replace("Power", "Space");
console.log(part);

// For the following sentence, replace "Binod" with "Kamlesh"

//Mera naam Binod hai, Mai kamlesh ka dost hu aur binod ko kamlesh pareshan karta hai.

let str9 = "Siddhi Reel banati hai ";
let str10 = "Sambhav cringe reel banata hai";
console.log(str9.concat(str10));