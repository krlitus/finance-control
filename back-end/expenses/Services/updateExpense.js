
var Expense = require('./../Entity/Expense');

module.exports = function(req, res){
    
    var update = Expense.update({
        _id: req.body.id,
        user: req.body.userId
    },{
        $set: req.body
    }).exec();
    
    update.then(function(result){
        
        if(!result){
            return res.status(400)
                    .json({
                       status: false,
                       data: {}
                    });
        }
        return res.status(200)
                .json({
                   status: true,
                   data: result
                });
    }).catch(function(err){
        console.log(err);
        res.status(500)
                .json({
                   status: false,
                   data: {}
                });
    });
    
};