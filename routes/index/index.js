var express = require('express');
var cors = require('cors');
var router = express.Router();

/* GET home page. */

var corsOptions = {
  origin: true,
  methods: 'GET',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get('/', cors(corsOptions), function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
