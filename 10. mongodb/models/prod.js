var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

mongoose.connect('mongodb://loclahost/test');

var producto_schema = new Schema({
	nombre: String,
	descripcion: String,
	precio: String
});

prod_model = mongoose.nodel('producto', producto_schema, 'producto');

var schema

module.exports = {
	show: function(req,res){
		prod_model.find({},function(err,items){
			if(!err){
				res.send(items);
			}else{
				return console.log(err);
			}
		});
	},
	create: function(req,res){

	},
	update: function(req,res){

	},
	delete: function(req,res){

	},

};

