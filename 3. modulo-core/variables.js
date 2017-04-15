var http = require('http'),
	fs = require('fs');

var parametros = [],
	valores = [],
	arreglo_parametros = [];

http.createServer(function(req,res){
	fs.readFile('./form.html', function(err,html){
		var html_string = html.toString();
		// console.log('html'+html_string);
		// console.log('req.url'+req.url);

		if(req.url.indexOf('?')>0){
			// console.log(req.url.indexOf('?'));
			
			var url_data = req.url.split('?');
			console.log(url_data);
			
			arreglo_parametros = url_data[1].split('&');
			console.log(arreglo_parametros);
		}

		for(var i=0;i<arreglo_parametros.length;i++){
			var parametro = arreglo_parametros[i];
			console.log(parametro);

			var param_data = parametro.split('=');
			console.log(param_data);

			parametros[i] = param_data[0];
			valores[i] = param_data[1];
		}

		for(var i=0;i<parametros.length;i++){
			html_string = html_string.replace('{'+parametros[i]+'}',valores[i]);
		}
		res.writeHead(200,{'Content-type':'text/html'});
		res.write(html_string);
		res.end();

	});
}).listen(8080);