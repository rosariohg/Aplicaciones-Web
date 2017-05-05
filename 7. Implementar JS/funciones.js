//FORMA 1
(function(){
	var mayor = function(o1,o2){
		if (o1.tamano > o2.tamano) {
			console.log("o1 es mayor");
		} else{
			console.log("o2 es mayor");
		}
	};

	var x = 5
	var y = 10
	mayor(x,y);

}());

//FORMA 2
const mayor =  (o1,o2) => o1 > o2 || o2 > o1;
console.log(`El mayor numero es ${mayor(3,5)}`);

//FORMA 3
const mayor =  (o1,o2) => (o1 > o2) ? `${o1} es mayor`: `${o2} es mayor`;
mayor(3,5);

(function(o1,o2){(o1 > o2) ? console.log(`${o1} es mayor`) : console.log(`${o2} es mayor`);}(3,5))

