var param_replacer = require('./lib/replace');

// var objetivo = "%hello% %world%! -- %world% %hello%!";
// var idioma  = "es";
// var reemplazos = {
// 	"en":{
// 		"hello": "Hello",
// 		"world": "World"
// 	},
// 	"es": {
// 		"hello": "Hola",
// 		"world": "Mundo"	
// 	}
// };

// var resultado = param_replacer.replace(objetivo, reemplazos[idioma]);

// console.log(resultado);

if (typeof exports != 'undefined'){
	if(typeof module != 'undefined' && module.exports){
		exports = module.exports = param_replacer;
	}
	exports.param_replacer = param_replacer;
}else{
	root.param_replacer = param_replacer;
}