const form = document.getElementById("Signform");

form.addEventListener("submit" , function(event) {
    event.preventDefault();
    const email = document.getElementById("useremail").value;
    const password = document.getElementById("userpassw").value;

    console.log(email);
    console.log(password);

localStorage.setItem("useremail" , email);
localStorage.setItem("userpassw" , password);

});
//const useremail = localStorage.getItem("useremail");
//const userpassw = localStorage.getItem("userpassw");

console.log(useremail , userpassw);

function signup() {
 var buttonElement = document.getElementById("Signform").style.display = "none";
 var buttonElement = document.getElementById("loginfrom").style.display = "block";
 
 }

function login(event) {
    event.preventDefault();
 var correctemail = "dev@gmail.com";
 var correctpassw = "12345679";
if (email === correctemail && password ===correctpassw) {
    
    alert("login Successful!");
} else {
    alert("Wrong Email or password")
 }
}