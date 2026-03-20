const mongoose = require('../db');

const postSchema = mongoose.Schema({
    title: String,
    content:String,
    createdAt:Date

})

const Post = mongoose.model("Post", postSchema)

module.exports= Post;