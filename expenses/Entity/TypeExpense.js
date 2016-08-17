var mongoose = require('mongoose');

var TypeExpense = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CategoryExpense',
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: false
    }
});

module.exports = mongoose.model('TypeExpense', TypeExpense);