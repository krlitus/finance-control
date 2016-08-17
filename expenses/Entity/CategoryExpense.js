var mongoose = require('mongoose');

var CategoryExpense = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('CategoryExpense', CategoryExpense);