//AJAX => Asynchronous JavaScript and XML

const xhr = new XMLHttpRequest();
xhr.open(
    "GET",
    "https://reqres.in/api/products/3",
    true
);
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.responseText);
    }
};
xhr.send();