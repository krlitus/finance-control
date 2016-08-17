var express = require('express');
var router = express.Router();

//router.post('/create-category', require('./Services/createCategory'));

router.get('/get-types', require('./Services/findType'));
router.post('/create-type', require('./Services/createType'));
router.put('/update-type', require('./Services/updateType'));

router.get('/get-expenses', require('./Services/findExpense'));
router.post('/create-expense', require('./Services/createExpense'));
router.put('/update-expense', require('./Services/updateExpense'));

module.exports = router;