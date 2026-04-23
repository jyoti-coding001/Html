const form = document.getElementById("loginform");

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
