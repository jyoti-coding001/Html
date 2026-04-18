// Session Storage

const username = sessionStorage.getItem("username");
const useremail = sessionStorage.getItem("email");

if (!username || !useremail || username === 'null' || useremail === 'null') {
   let yourname = prompt("What is your name");
   sessionStorage.setItem("username", yourname);
   let email = prompt("What is your email");
   sessionStorage.setItem("email", email);
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
   sessionStorage.removeItem("email");
   sessionStorage.removeItem("username");

   // To reload page
   window.location.reload();
}