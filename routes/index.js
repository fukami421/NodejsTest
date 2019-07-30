const express = require('express');
const router = express.Router();

/* GET home page. */
//htmlをrenderしたい時は、.htmlをつける
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express1' });
});

router.get('/layout', function(req, res, next) {
  res.render('layout', { title: 'layout' });
});

router.get('/id/:id', function(req, res, next) {
  res.send('id: ' + req.params.id);
});

module.exports = router;
