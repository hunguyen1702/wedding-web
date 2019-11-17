var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(appRootPath + '/views/index.html'));
});

router.post('/happy_wedding', function(req, res) {

});

module.exports = router;
