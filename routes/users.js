var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/tables', function(req, res, next) {
  res.send('Tables shown here temp:');
});

module.exports = router;
