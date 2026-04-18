// let yourname = prompt("What is your name");
// let email = prompt("What is your email");

// localStorage.setItem("username", yourname);
// localStorage.setItem("email", email);

// const username = localStorage.getItem("username");
// const useremail = localStorage.getItem("email");

// document.writeln(username)
// document.writeln(useremail)

// Local Storgae
const username = localStorage.getItem("username");
const useremail = localStorage.getItem("email");

if (!username || !useremail || username === 'null' || useremail === 'null') {
   let yourname = prompt("What is your name");
   localStorage.setItem("username", yourname);
   let email = prompt("What is your email");
   localStorage.setItem("email", email);
   window.location.reload();
}

if(username && useremail) {
   document.getElementById("logoutbtn").style.display = "block";
}
if(username && useremail) {
   document.writeln(username, '<br/>');
   document.writeln(useremail, '<br/>');
}

function logout() {
   // localStorage.removeItem("email");
   // localStorage.removeItem("username");

   localStorage.clear(); // Remove all items

   // To reload page
   window.location.reload();
}