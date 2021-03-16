var express = require('express');
var path = require('path');
var db = require('./mongoosedb.js');
var Post = require('./models/post.js')

var app = express();

/* A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. */

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));
app.use('/public', express.static(path.join(__dirname, '/public')));


app.get('/', function(req, res){
  
  Post.find((err, posts)=>{
      if(err){
        console.log('Error getting post');
      }

      console.log(posts);
      res.render('index', {
        posts: posts
      })
  })
  
});

app.get('/about', function(req, res){
  res.render('about')
});

app.get('/contact', function(req, res){
  res.render('contact')
});


//simple adding document.
app.get('/create', (req, res)=>{
  var post = new Post({
    title: 'Some title',
    body: 'some body',
    author: 'Aziz Qadeer',
    date: new Date()
  })

  post.save((err, post)=>{
      if(err){
        console.log(err);
      }

      console.log(post);
  })
})



app.listen(8888);