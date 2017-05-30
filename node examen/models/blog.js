var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/blog');

var poststs_Schema = new Schema({
	body: String,
	permalink: String,
	author: String,
	title: String,
	tags: String,
	comments: {type:Array, default: []} ,
	date: String
});

prod_model = mongoose.model('poststs',poststs_Schema,'poststs');

module.exports = {

	show: function(req,res){
		if(req.query._id==null){
			prod_model.find({},function(err,items){
				console.log(items);
				if(!err){
					res.send(items);
					// res.render('blogs',{data:items});
				}else{
					return console.log(err);
				}
			});
		}else{
			prod_model.findOne({_id: req.query._id},function(err,items){
				if(!err){
					res.send(items);
				}else{
					return console.log(err);
				}
			});
		}
		},

	create: function(req,res){
	  console.log (req.query);
		var item={
			body: req.query.body,
			permalink: req.query.permalink,
			author:req.query.author,
			title:req.query.title,
			tags:req.query.tags,
			comments:req.query.comments,
			date:req.query.date
		};
		var nuevo = new prod_model(item).save();
		res.send(nuevo);
	},
	update: function(req,res){
		prod_model.findOne({permalink: req.query.permalink},function(err,item){
		item.body = req.query.body;
		item.permalink = req.query.permalink;
		item.author = req.query.author;
		item.title = req.query.title;
		item.tags = req.query.tags;
		item.comments = req.query.comments;
		item.date = req.query.date;
		item.save(); 
		res.send(item);

		});
	},
	delete: function(req,res){
		prod_model.findOne({permalink: req.query.permalink},function(err,item){
			if (item) {item.remove();}
			res.send({status:true});

		});
	},

	showComment: function(req,res){
		if(req.query._id==null){
			prod_model.find({},function(err,items){
				console.log(items);
				if(!err){
					res.send(items);
				}else{
					return console.log(err);
				}
			});
		}else{
			prod_model.findOne({permalink: req.query.permalink},function(err,items){
				if(!err){
					res.send(items);
				}else{
					return console.log(err);
				}
			});
		}
	},

	createComment: function(req,res){
		prod_model.findOne({permalink: req.query.permalink},function(err,item){
		item.comments.push({
			body: req.query.body,
			email: req.query.email,
			author: req.query.author
		})
		item.save(); 
		res.send(item);

		});
	},

	updateComment: function(req,res){
		prod_model.findOne({permalink: req.query.permalink},function(err,item){
		index = req.query.index;
		item.comments[index].body = req.query.body;
		item.comments[index].email = req.query.email;
		item.comments[index].author = req.query.author;
		item.save(); 
		res.send(item);

		});
	},


};
