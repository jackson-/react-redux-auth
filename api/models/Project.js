var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var User = mongoose.model('User');

var ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  tagList: [{ type: String }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true});

ProjectSchema.plugin(uniqueValidator, {message: 'is already taken'});


ProjectSchema.methods.toJSONFor = function(user){
  return {
    title: this.title,
    description: this.description,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    tagList: this.tagList,
    author: this.author.toProfileJSONFor(user)
  };
};

mongoose.model('Project', ProjectSchema);
