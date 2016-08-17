
var User = require('./../Entity/User');

module.exports = function(req, res){
    
    var user = new User(req.body);
    user.save()
            .then(function(user){
                var response = {
                    status: true,
                    data: user
                };
                var status = 200;
                if(!user){
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