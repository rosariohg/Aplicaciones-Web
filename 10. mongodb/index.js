var html = require('http');
var express = require('express');
var app = express();

app.use('/static',express.static('public'));

app.get('/prueba-jade',function(req,res){
	res.render('index.jade');
});
app.get('/',function(req,res){

res.send('Este es mi modelo de login! con express')

});

app.get('/static/js',function(req,res){

res.send('Este es mi modelo de login! con express')

});

app.post('/',function(req,res){

res.send('llamada de POST misma url')

});

app.put('/user',function(req,res){

res.send('Se recibio un PUT dentro de /user')

});

app.delete('/user',function(req,res){

res.send('Se recibio un Delete dentro de /user')

});


app.listen(3000,function (){

console.log('Aplicacion corriendo en el puerto 3000');
});

//manejando errores..
app.use(function(req,res,next){
	res.status(404).send("Eso no existe");
});

app.use(function(err,req,res,next){
console.error(err,stack);
res.status(500).send('Algo salio mal!!!!');
});