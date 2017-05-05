var param_replacer = require('tecsup-2017-huancagonza');

var objetivo = "%welcome% %to% %institute%! -- %to% %welcome% %institute%!";
var idioma  = "es";
var reemplazos = {
	"en":{
		"welcome": "Welcome",
		"to": "to",
		"institute": "TECSUP"
	},
	"es": {
		"welcome": "Bienvenido",
		"to": "a",
		"institute": "Tecsup"
	}
};

var resultado = param_replacer.replace(objetivo, reemplazos[idioma]);

console.log(resultado);