var http = require('http'),
	fs   = require('fs'),
	qs = require('querystring');
var validator = require('../../source/funciones');

var server = http.createServer(function (req,res){
	var camino = req.url.split('.');
	var imgUrl = camino.pop();

	if (req.method == 'GET'){

		res.writeHead(200,{'Content-Type':'text/html'});
		fs.readFile('./contact.html',function(err,data){
			res.end(data);
		})
	}
	else if (req.method == 'POST'){
		var body = '';

        req.on('data', function (data) {
            body += data;
            if (body.length > 1e6)
                req.connection.destroy();
        });

        req.on('end', function () {
            var post = qs.parse(body);
            var respuesta = validator.validar(post["nombre"], post['email'],post["fecha"]);
            res.write(respuesta);
            res.end();
        });
		
	}

});

server.listen(8080);