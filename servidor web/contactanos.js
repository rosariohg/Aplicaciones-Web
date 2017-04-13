var validar = function() {
	var nombre = document.getElementById('nombres').value;
	// var apellido = document.getElementById('apellidos').value;

	document.getElementById('apellidos').value = nombre;
	// var x = document.forms["validar"]["email"].value;
	// var atpos = x.indexOf("@");
	// var dotpos = x.lastIndexOf(".");
	// if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
	// 	alert("Not a valid e-mail address");
	// 	return false;
	// }
	
	// if(nombre == " " || apellido == " "){
	// 	alert('Nombres y apellidos son obligatorios');
	// }
	
	// console.log(nombre + " " + apellido);

};