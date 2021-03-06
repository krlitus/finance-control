var express = require('express');
var router = express.Router();

router.get('/', require('./Services/find'));
router.post('/', require('./Services/create'));
router.put('/', require('./Services/update'));
router.post('/auth', require('./Services/authenticate'));

module.exports = router;