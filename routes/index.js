var express = require('express');
var router = express.Router();

/* GET home page. */

//jade模板引擎
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res)	{
  res.send('Hello World!!!');
});

module.exports = router;
