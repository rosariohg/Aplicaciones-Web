var Sumar = function(){
	var temp = 0 ;
	return {		
		"obtenerSumaActual": function(){
			return temp;
		},
		"agregar": function(n){
			if ( n > 0) temp += n;
		}
	};
};

var s1 = Sumar();
// var s2 = Sumar();

s1.agregar(10);
s1.agregar(20);

console.log(s1.obtenerSumaActual());