var mongoose = require('mongoose'); 

var CommentsSchema = new mongoose.Schema({
	body: String, 
	author: String, 
	upvotes: {type: Number, default: 0},
	post: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
})

mongoose.model('Comments', CommentsSchema); 