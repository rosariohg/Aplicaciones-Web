var http = require('http'),
	fs   = require('fs');

var server = http.createServer(function (req,res){
	var camino = req.url.split('.');
	var imgUrl = camino.pop();

	if(req.url== '/index.html' || req.url == '/'){
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.readFile('./index.html',function(err,data){
			res.end(data);
		});
	}else if (req.url == '/nosotros.html'){
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.readFile('./nosotros.html',function(err,data){
			res.end(data);
		});
	}else if (req.url == '/servicios.html'){
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.readFile('./servicios.html',function(err,data){
			res.end(data);
		});
	}else if (req.url == '/contactanos.html'){
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.readFile('./contactanos.html',function(err,data){
			res.end(data);
		});
	}else
	if(imgUrl == 'png'){
		res.writeHead(200,{'Content-Type':'image/png'});
		fs.readFile('.'+req.url,function(err,data){
			res.end(data);
		});
	}else if(imgUrl == 'jpg'){
		res.writeHead(200,{'Content-Type':'image/jpg'});
		fs.readFile('.'+req.url,function(err,data){
			res.end(data);
		});
	}
	
	else{
		res.end('Invalido');
	}

});

server.listen(8080);