console.log (process.argv[2],process.argv[3]);

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var dias = ["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

var anio = process.argv[2];
var mes = process.argv[3];

if (mes < 1 || mes > 12){
	console.log("el mes debe ser entre 1 y 12");
}
else {
	var primerDia = new Date(anio,mes - 1 ,1);
	var ultimoDia = new Date(anio,mes ,0);
	console.log("Primer día del mes: " +  dias[primerDia.getDay()] + " " + primerDia.getDate()  + " " + meses[primerDia.getMonth()]);
	console.log("Último día del mes: " +  ultimoDia.getDay() + " " + ultimoDia.getDate()  + " " + meses[ultimoDia.getMonth()]);

}
