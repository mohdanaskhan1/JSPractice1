// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// console.log(xhr);
// console.log(xhr.readyState);
// xhr.open("GET", URL);
// console.log(xhr.readyState);
// xhr.onreadystatechange = function () {
//     console.log(xhr.readyState);
//     if (xhr.readyState === 4) {
//         console.log(xhr);
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//         console.log(typeof data);
//     }
// };

// xhr.onload = function () {
//     if (xhr.status === 200) {
//         console.log(xhr.readyState);
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//         console.log(xhr.readyState);
//     }
// };
// console.log(xhr.readyState);
// xhr.send();
// console.log(xhr.readyState);


// ----------------------------------------------------

// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", URL);
// xhr.onload = function () {
//     if (xhr.status === 200 && xhr.status < 300) {
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//         const id = data[3].id;
//         const xhr2 = new XMLHttpRequest();
//         const url = `${URL}/${id}`;
//         xhr2.open("GET", url);
//         xhr2.onload = function () {
//             const data2 = JSON.parse(xhr2.response);
//             console.log(data2);        
//         }
//         xhr2.send();
//     }
//     else{
//         console.log("Something went wrong");
//     }
// }

// xhr.oneerror = function(){
//     console.log("Network Error");
// }
// xhr.send();

//BY PROMISE

// const URL = "https://jsonplaceholder.typicode.com/posts";
// function sendRequest(method, url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = function () {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.response);
//             }
//             else {
//                 reject({
//                     status: xhr.status,
//                     statusText: xhr.statusText
//                 });
//             }
//         }
//         xhr.onerror = function () {
//             reject(new Error("Network Error"));
//         }
//         xhr.send();
//     });
// }

// sendRequest("GET", URL)
//     .then(response => {
//         const data = JSON.parse(response);
//         return data;
//     })
//     .then(data => {
//         console.log(data);
//         const id = data[3].id;
//         return sendRequest("GET", `${URL}/${id}`);
//     })
//     .then(response2 => {
//         const data2 = JSON.parse(response2);
//         console.log(data2);
//     })
//     .catch(err => {
//         console.log(err);
//     });



// /FETCH API


// const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL)
// //Returns the promise which resolves to Response object
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         const id = data[3].id;
//         return fetch(`${URL}/${id}`);
//     })
//     .then(response2 => {
//         if (!response2.ok) {
//             throw new Error(`HTTP error! status: ${response2.status}`);
//         }
//         return response2.json();
//     })
//     .then(data2 => {
//         console.log(data2);
//     })
//     .catch(err => {
//         console.log(err);
//     });


//ASYNC AWAIT

const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    console.log(data);

    const id = data[3].id;
    const response2 = await fetch(`${URL}/${id}`);
    if (!response2.ok) throw new Error(`HTTP error! status: ${response2.status}`);
    const data2 = await response2.json();
    console.log(data2);
  } catch (err) {
    console.error(err);
  }
}

getPosts();

//Async is always return a promise and await is used to wait for a promise to resolve
//If we don't use await then it will return a pending promise
//If we don't use async then it will throw an error
//We can use try catch block to handle errors in async await
//We can use multiple await in a single async function
//We can use async await with fetch API
//We can use async await with XMLHttpRequest by wrapping it in a promise
//We can use async await with other promise based APIs like axios, superagent etc.
//We can use async await with setTimeout by wrapping it in a promise
//We can use async await with event listeners by wrapping it in a promise
//We can use async await with any function that returns a promise
//We can use async await with any function that takes a callback by wrapping it in a promise

