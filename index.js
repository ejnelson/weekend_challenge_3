var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
// var bios=require('./groupinfo');
var app=express();
var solve = require('./public/solve');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/solve', solve);

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'public/index.html'));
});

// app.get('/bios', function(req,res){
//
//   res.body=bios.people();
//   res.send(res.body);
// });



app.listen(3000);
