(function(){
	var esPrimo = function(num){
		if (Number(num) === num && num % 1 === 0 && num > 1) {
			var primo = true;
			if (num==2) return true;
			for(i=2;i<num;i++)
				if(num%i==0){
					primo = false;
					break;
				}
			return primo;
		}
		console.log("Ingresa un número válido");
		
	}
	console.log(esPrimo(5));
}());