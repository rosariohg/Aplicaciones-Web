exports.navidad = function() {

    var dia_actual = new Date();
    dia_actual.setHours(0,0,0,0);
    navidad = new Date("December 25, 2017");
    var un_dia = 1000 * 60 * 60 * 24 ;
    var dias = navidad - dia_actual;
    var dias_totales = dias / un_dia ;
    console.log (Math.round(dias_totales) + " dias para navidad");

};

exports.edad = function(fecha){

    var values=fecha.split("-");
    var dia = values[2];
    var mes = values[1];
    var ano = values[0];

    // cogemos los valores actuales
    var fecha_hoy = new Date();
    var ahora_ano = fecha_hoy.getYear();
    var ahora_mes = fecha_hoy.getMonth();
    var ahora_dia = fecha_hoy.getDate();

    // realizamos el calculo
    var edad = (ahora_ano + 1900) - ano;
    if ( ahora_mes < (mes - 1))
    {
        edad--;
    }
    if (((mes - 1) == ahora_mes) && (ahora_dia < dia))
    {
        edad--;
    }
    if (edad > 1900)
    {
        edad -= 1900;
    }

    console.log("Tienes " + edad + " años");
    
};

exports.validar = function(nombre,email,fecha){
    if(nombre == "" || email == "" || fecha == ""){
        return "llene los campos";
    }
    else{
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
            return "Invalido email";
        }
        
        var values=fecha.split("-");
        var anio = parseInt(values[0]);
        var mes = parseInt(values[1]);
        var dia = parseInt(values[2]);

        if (mes < 1 || mes >12){
            return "mes invalidado";
        }
        else if(dia < 1 || dia > 31){
            return "dia invalidado";   
        }
        else if (anio / 1000 == 0){
            return "año invalido";
        }   

        console.log("Datos validados correctamente");
        return "Datos validados";
    }

    
}