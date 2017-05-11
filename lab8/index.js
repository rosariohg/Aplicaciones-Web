var express = require('express');
var app = express()
app.use(express.static('public'))
app.use('/static',express.static('public'))

app.get('/', function (req,res){
	res.send('Hola mundo!! en Express :)')
})

app.post('/', function (req,res){
	res.send('Llamada POST misma url')
})

app.put('/user', function (req,res){
	res.send('Recibimos un PUT en /user')
})

app.delete('/user', function (req,res){
	res.send('Recibimos un DELETE en /user')
})

app.use(function (req,res,next){
	res.status(400).send('Eso no existe!')
})

app.use(function (err,req,res,next){
	console.log(err.stack)
	res.status(500).send('Algo salio mal')
})

app.listen(3000,function(){
	console.log('Escuchando en el puerto 3000°');
});
