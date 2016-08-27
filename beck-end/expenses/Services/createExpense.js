
var Expense = require('./../Entity/Expense');

module.exports = function(req, res){
    
    var exp = new Expense(req.body);
    exp.save()
            .then(function(data){
                var response = {
                    status: true,
                    data: data
                };
                var status = 200;
                if(!data){
                    response = {
                        status: false,
                        data: {}
                    };
                    status = 500;
                }
                res.status(status).json(response);
                
            }).catch(function(err){
                console.log(err);
                res.status(500).json({
                    status: false,
                    data: {}
                });
            });
    
};