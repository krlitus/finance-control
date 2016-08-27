var mongoose = require('mongoose');

var Expense = mongoose.Schema({
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypeExpense',
        require: true
    },
    value: {
        type: mongoose.Schema.Types.Number,
        require: true
    },
    status: {
        type: String,
        enum: ['PAID', 'UNPAID'],
        required: true,
        default: 'UNPAID'
    },
    dt_expense:{
        type: Date,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    description: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model('Expense', Expense);