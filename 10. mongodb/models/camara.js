var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/fabvision');

var camara_schema = new Schema({
  num_camara: String,
  grupo: String,
  ip: String,
  puerto: String,
});
model_camara = mongoose.model('camara',camara_schema,'camara');


module.exports = {

  show: function(req, res) {
    if(req.query._id==null) {
      model_camara.find({}, function(err,items) {
        if(!err){
          //res.send(items);
          res.render('camara' ,{data:items});
        }else
          return console.log(err);
      });
    }else{
      model_camara.findOne({_id: req.query._id},function(err,items) {
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
      num_camara: req.query.num_camara,
      grupo:      req.query.grupo,
      ip:         req.query.ip,
      puerto:     req.query.puerto,
    };
    var nuevo = new model_camara(item).save();
    res.send(nuevo);
  },

  update: function(req,res) {
    model_camara.findOne({_id: req.query._id}, function(err,item) {
      item.num_camara = req.query.num_camara;
      item.grupo      = req.query.grupo;
      item.ip         = req.query.ip;
      item.puerto     = req.query.puerto;

      item.save();
      res.send(item);
    });
  },

  delete: function(req,res) {
    model_camara.findOne({_id: req.query._id}, function(err,item) {
      item.remove();
      res.send({status:true});
    });
  },

};
