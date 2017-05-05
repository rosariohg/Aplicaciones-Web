var _=require("underscore")

// var lista = [1,2,3,4,5,6];
// _.each(lista,function(item){
// 	console.log(item);
// })

var empleados = [
	{
		"id":1,
		"name":"soni",
		"designation":"SE",
		"salary":25000
	},
	{
		"id":2,
		"name":"rohit",
		"designation":"SSE",
		"salary":35000

	},
	{
		"id":3,
		"name":"akansha",
		"designation":"manager",
		"salary":45000

	},
	{
		"id":4,
		"name":"mohan",
		"designation":"accpuntant",
		"salary":30000

	},
	{
		"id":5,
		"name":"gita",
		"designation":"SSE",
		"salary":35000

	}
];

// var cargos = _.map(empleados,function(empleado){
// 	return {nombre: empleado.name, 
// 			cargo: empleado.designation};

// });
// console.log(cargos);


// console.log(_.pluck(empleados,"name"));


var empleados_sse = _.chain(empleados).filter(function(empleado){
	return empleado.designation === 'SSE';
})
.map(function (empleado){
	return {name: empleado.name, id: empleado.id};
})
.value();

console.log(empleados_sse);