var Expense = require('./../Entity/Expense');


module.exports = function(req, res){
    
    var find = Expense.find().exec();
    find.then(function(result){
        res.json(result);
    }).catch(function(err){
        console.log(err);
    });
};