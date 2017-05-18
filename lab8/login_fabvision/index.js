var express = require('express')
var app = express()

// var path = require('path')

app.use(express.static('public'))
app.set('view engine','jade');

// app.get('/', function(req,res){
// 	res.sendFile(path.join(__dirname+'/views/login.html'));
// })

app.get('/prueba-jade',function(req,res){
	res.render('index')
})

// app.use(function (err,req,res,next){
// 	console.log(err.stack)
// 	res.status(500).send('Algo salio mal')
// })

app.listen(3000,function(){
	console.log('Escuchando en el puerto 3000°');
});