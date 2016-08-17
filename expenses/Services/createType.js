
var TypeExpense = require('./../Entity/TypeExpense');

module.exports = function(req, res){
    
    var type = new TypeExpense(req.body);
    type.save()
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