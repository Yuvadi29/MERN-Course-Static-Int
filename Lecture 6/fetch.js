fetch("https://reqres.in/api/products/3")
    .then((response) => response.json()) 
    .then((data) => console.log(data))
    .catch((error) => console.log("Error: ", error));

// Create a fetch function to fetch the data from the following api: "https://jsonplaceholder.typicode.com/posts" and display the first object only.

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data[0].title))
    .catch((error) => console.log("Error: ", error));