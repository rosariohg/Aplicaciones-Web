var express = require('express'),
app = express();
bodyParser = require('body-parser'),
producto = require('./models/prod');

app.use(bodyParser.json());

app.set('view engine' ,'jade');

app.get('/',function(req,res){
res.send('Hola mundo');
});
app.get('/login',function(req,res){
	res.sender('login');
});
app.get('/table',function(req,res){
	res.sender('table');
});

app.get('/producto',producto.show);
app.post('/producto',producto.create);
app.post('/producto/update',producto.update);
app.post('/producto/delete',producto.delete);

app.listen(9090,function(){

	console.log('Iniciando en el puerto 9090');
});