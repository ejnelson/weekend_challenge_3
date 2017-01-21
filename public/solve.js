var express = require('express');
var router = express.Router();
var result={};
router.post('/add', function(req, res){
result.answer=Number(req.body.x)+Number(req.body.y);
console.log('add');
res.sendStatus(200);
});

router.post('/subtract', function(req, res){
console.log('subtract');
result.answer=req.body.x-req.body.y;

res.sendStatus(200);
});

router.post('/multiply', function(req, res){
result.answer=req.body.x*req.body.y;
console.log('multiply');

res.sendStatus(200);
});

router.post('/divide', function(req, res){
console.log('divide');
result.answer=req.body.x/req.body.y;
res.sendStatus(200);
});

router.post('/modulus', function(req, res){
result.answer=req.body.x%req.body.y;
console.log('modulus');
res.sendStatus(200);
});
router.post('/xy', function(req, res){
result.answer=Math.pow(req.body.x,req.body.y);
console.log('xy');
res.sendStatus(200);
});
router.post('/sin', function(req, res){
result.answer=Math.sin(req.body.x);
console.log('sin');
res.sendStatus(200);
});
router.post('/cos', function(req, res){
result.answer=Math.cos(req.body.x);
console.log('cos');
res.sendStatus(200);
});
router.post('/tan', function(req, res){
result.answer=Math.tan(req.body.x);
console.log('tan');
res.sendStatus(200);
});
router.get('/', function(req, res){

res.send(result);
return console.log('done');
});
module.exports = router;
