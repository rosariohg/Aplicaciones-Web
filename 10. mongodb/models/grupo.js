var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/fabvision');

var grupo_schema = new Schema({
  nombre: String,
  lugar: String,
});
model_grupo = mongoose.model('grupo',grupo_schema,'grupo');


module.exports = {

  show: function(req, res) {
    if(req.query._id==null) {
      model_grupo.find({}, function(err,items) {
        if(!err){
          //res.send(items);
          res.render('grupo' ,{data:items});
        }else
          return console.log(err);
      });
    }else{
      model_grupo.findOne({_id: req.query._id},function(err,items) {
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
      lugar:      req.query.lugar,
    };
    var nuevo = new model_grupo(item).save();
    res.send(nuevo);
  },

  update: function(req,res) {
    model_grupo.findOne({_id: req.query._id}, function(err,item) {
      item.nombre     = req.query.nombre;
      item.lugar      = req.query.lugar;

      item.save();
      res.send(item);
    });
  },

  delete: function(req,res) {
    model_grupo.findOne({_id: req.query._id}, function(err,item) {
      item.remove();
      res.send({status:true});
    });
  },

};
