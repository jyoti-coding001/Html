// function clickHandler() {
//       alert("Button Clicked");
// }


// REF - https://www.w3schools.com/js/js_arrow_function.asp
// Video - https://www.youtube.com/watch?v=Atq7VjVbaA8

// Arrow Function
// const clickHandler = () => {
//       alert("Button Clicked");
// }

// Arrow Function with single statement
const clickHandler = (s) => alert("Button Clicked");

// Fetch Data from local file
// Function in fetch 1 fetch(), 2 then()
// Use this in run - chrome.exe --user-data-dir="C:/temp/chrome" --disable-web-security

const data = fetch('./json/data.json')
   .then(response => response.json())
   .then(json => {
      console.log(json);
      for(let i = 0; i < json.length; i++){
         document.body.innerHTML += `<h1>${json[i].title}</h1>`;
      }
   });

const fetchApi = fetch('./json/data.json'); // Return promise
const resolveapi = fetchApi.then(response => response.json()) // Return Response
const finalData = resolveapi.then(data => console.log(data)) // Return JSON DATA


// API - Application Programming Interface
// Example of API - https://jsonplaceholder.typicode.com/todos/

const fetchApi2 = fetch('https://jsonplaceholder.typicode.com/todos/'); // Return promise
const resolveapi2 = fetchApi.then(response => response.json()) // Return Response
const finalData2 = resolveapi.then(data => console.log(data)) // Return JSON DATA
