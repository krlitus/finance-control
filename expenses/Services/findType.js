var TypeExpense = require('./../Entity/TypeExpense');


module.exports = function(req, res){
    
    var find = TypeExpense.find().populate('category').populate('user').exec();
    find.then(function(result){
        res.json(result);
    }).catch(function(err){
        console.log(err);
    });
};