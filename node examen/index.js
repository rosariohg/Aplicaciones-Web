var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var blog = require('./models/blog');

app.use(bodyParser.json());

app.set('view engine' ,'jade');

app.get('/',function(req,res){
	res.send('Hola mundo');
});


app.get('/posts_listar',blog.show);
app.post('/posts_create',blog.create);
app.post('/posts_update',blog.update);
app.post('/posts_remove',blog.delete);

app.get('/comment_listar',blog.showComment);
app.post('/comment_create',blog.createComment);
app.post('/comment_update',blog.updateComment);


app.listen(8080,function(){
	console.log('Iniciando en el puerto 8080');
});
