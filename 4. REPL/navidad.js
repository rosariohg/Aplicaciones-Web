var dia_actual = new Date();
dia_actual.setHours(0,0,0,0);
var navidad = new Date(dia_actual.getFullYear(), 3, 4);

var un_dia = 1000 * 60 * 60 * 24 ;

var dias = navidad - dia_actual;

var dias_totales = dias / un_dia ;

console.log (Math.round(dias_totales));