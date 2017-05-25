var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/fabvision');

var usuario_schema = new Schema({
  nombre: String,
  apellidos: String,
  correo: String,
  password: String,
  grupo: String,
});
model_usuario = mongoose.model('usuario',usuario_schema,'usuario');


module.exports = {

  show: function(req, res) {
    if(req.query._id==null) {
      model_usuario.find({}, function(err,items) {
        if(!err){
          //res.send(items);
          res.render('usuario' ,{data:items});
        }else
          return console.log(err);
      });
    }else{
      model_usuario.findOne({_id: req.query._id},function(err,items) {
        if(!err)
          res.send(items);
        else
          return console.log(err);
      });
    }
  },

  create: function(req,res) {
    console.log (req.query);
    var item={
      nombre:     req.query.nombre,
      apellidos:  req.query.apellidos,
      correo:     req.query.correo,
      password:   req.query.password,
      grupo:      req.query.grupo,
    };
    var nuevo = new model_usuario(item).save();
    res.send(nuevo);
  },

  update: function(req,res) {
    model_usuario.findOne({_id: req.query._id}, function(err,item) {
      item.nombre     = req.query.nombre;
      item.apellidos  = req.query.apellidos;
      item.correo     = req.query.correo;
      item.password   = req.query.password;
      item.grupo      = req.query.grupo;

      item.save();
      res.send(item);
    });
  },

  delete: function(req,res) {
    model_usuario.findOne({_id: req.query._id}, function(err,item) {
      item.remove();
      res.send({status:true});
    });
  },

};
