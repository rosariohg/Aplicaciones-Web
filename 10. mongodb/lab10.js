var express = require('express'),
app = express();
bodyParser = require('body-parser'),
producto = require('./models/prod');
grupo = require('./models/grupo');
usuario = require('./models/usuario');
camara = require('./models/camara');
incidente = require('./models/incidente');

app.use(bodyParser.json());

app.set('view engine' ,'jade');

app.get('/',function(req,res){
	res.send('Hola mundo');
});
app.get('/login',function(req,res){
	res.render('login');	
});
app.get('/resgistrar',function(req,res){
	
});


app.get('/table',function(req,res){
	res.render('table');
});

app.get('/producto',producto.show);
app.post('/producto',producto.create);
app.post('/producto/update',producto.update);
app.post('/producto/delete',producto.delete);

app.get('/grupo',grupo.show);
app.post('/grupo',grupo.create);
app.post('/grupo/update',grupo.update);
app.post('/grupo/delete',grupo.delete);

app.get('/usuario',usuario.show);
app.post('/usuario',usuario.create);
app.post('/usuario/update',usuario.update);
app.post('/usuario/delete',usuario.delete);

app.get('/camara',camara.show);
app.post('/camara',camara.create);
app.post('/camara/update',camara.update);
app.post('/camara/delete',camara.delete);

app.get('/incidente',incidente.show);
app.post('/incidente',incidente.create);
app.post('/incidente/update',incidente.update);
app.post('/incidente/delete',incidente.delete);

app.listen(9090,function(){

	console.log('Iniciando en el puerto 9090');
});
