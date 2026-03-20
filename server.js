const express = require('express');
const Post= require('./models/Post')

const app = express()
app.use(express.json());

const port = 5001;

app.post("/posts", async (req, res)=>{
    const post = await Post.create({
        title:req.body.title,
        content:req.body.content,
        createdAt: new Date()
    })
    res.json(post)
})

app.get("/posts",async (req, res)=>{
    const posts  = await Post.find();
    res.json(posts)
})

app.listen(port, ()=>console.log(`Server started at Port: ${port}`))