var express = require('express');
var cors = require('cors');
var router = express.Router();

/* GET users listing. */

var corsOptions = {
  origin: true,
  methods: 'GET',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.options('/', cors());
router.get('/', cors(corsOptions), function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
