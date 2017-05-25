var intentos = 3; 
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "jose" && password == "jose123"){
alert ("Bienvenido !!");
window.location = "paginaexitologin.html"; 
return false;
}
else{
intentos --;
alert("Te quedan "+intentos+" intentos;");

if( intentos == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

