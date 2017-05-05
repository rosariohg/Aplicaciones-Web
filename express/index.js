var express = require('express'); // express es el framework
var http = require('http'); // http es un modulo de nodejs

var app = express();
app.set('port',process.env.PORT || 3000); //process.env.PORT  es una variable de entorno 
// app.use(express.bodyParser());

// creando rutas

app.get('/', function(request, response) {

    response.send('¡Hola, Express!');

});

//recibiendo parametros

app.get('/users/:userName', function(request, response) {

    var name = request.params.userName;

    response.send('¡Hola, ' + name + '!');

});

// recibiendo POST

// app.post('/users', function(request, response) {

//     var username = request.body.username;

//     response.send('¡Hola, ' + username + '!');

// });

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});