const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
var Post = require("./models/post");

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

mongoose.connect('mongodb://localhost:27017/songs');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

app.post('/posts', (req, res) => {
    var db = req.db;
    var title = req.body.title;
    var band = req.body.band;
    var new_post = new Post({
      title: title,
      band: band
    })
    new_post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'Post saved successfully!'
      })
    })
  })
// Fetch all posts
app.get('/posts', (req, res) => {
    Post.find({}, 'title band', function (error, posts) {
      if (error) { console.error(error); }
      res.send({
        posts: posts
      })
    }).sort()
  })

app.listen(process.env.PORT || 8081,()=>{
    console.log('Connect to Port 8081')
})
