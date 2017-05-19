var express = require('express')
var app = express()

app.use(express.static('public'))
app.set('view engine','jade');

app.get('/index',function(req,res){
	res.render('index')
})

app.listen(3000,function(){
	console.log('Escuchando en el puerto 3000°');
});