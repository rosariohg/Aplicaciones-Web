var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/fabvision');

var incidente_schema = new Schema({
  camara: String,
  fecha: String,
  tipo: String,
});
model_incidente = mongoose.model('incidente',incidente_schema,'incidente');


module.exports = {

  show: function(req, res) {
    if(req.query._id==null) {
      model_incidente.find({}, function(err,items) {
        if(!err){
          //res.send(items);
          res.render('incidente' ,{data:items});
        }else
          return console.log(err);
      });
    }else{
      model_incidente.findOne({_id: req.query._id},function(err,items) {
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
      camara:     req.query.camara,
      fecha:      req.query.fecha,
      tipo:       req.query.tipo,
    };
    var nuevo = new model_incidente(item).save();
    res.send(nuevo);
  },

  update: function(req,res) {
    model_incidente.findOne({_id: req.query._id}, function(err,item) {
      item.camara     = req.query.camara;
      item.fecha      = req.query.fecha;
      item.tipo       = req.query.tipo;

      item.save();
      res.send(item);
    });
  },

  delete: function(req,res) {
    model_incidente.findOne({_id: req.query._id}, function(err,item) {
      item.remove();
      res.send({status:true});
    });
  },

};
