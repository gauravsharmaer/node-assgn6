const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    posted_at:{
        type:String,
        require:true
    },
    posted_by:{
        type:String,
        require:true
    }
},{timestamps:true})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;