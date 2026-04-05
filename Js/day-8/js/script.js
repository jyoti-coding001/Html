// Date
// REF - https://www.w3schools.com/js/js_date_methods.asp
const date = new Date(); // Get full date with time
console.log();
console.log( date.getFullYear() ); // Get full year
console.log( date.getMonth() ); // Get month number  - 1 starts from 0
console.log( date.getDate() ); // Get date number
console.log( date.getHours() ); // Get hour numberdate



const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
const datee = new Date("2030-12-31");
console.log(datee.getMonth())
console.log(d);
console.log(months[d.getMonth()])
console.log(d.getMonth());


// Set Timeout = run code only once at given time
alert("Hello day 8");

function showAlert() {
   alert("Hello day 8 with 5 sec delay");
}

function showConsole() {
   console.log(new Date().getFullYear())
}

setTimeout(showAlert, 5000);
setTimeout(showConsole, 3000);

console.log("HI")


 // Set Interval = run code infinte in give time
function showSecond() {
   console.log(new Date().getSeconds());
}
setInterval(showSecond, 1000);