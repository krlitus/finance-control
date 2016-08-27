var User = require('./../Entity/User');
var jwt    = require('jsonwebtoken'); 
var config = require('./../../config');
module.exports = function(req, res){
    
    var find = User.findOne({
        email: req.body.email,
        password: req.body.password
    }).exec();
    find.then(function(result){
        
        if(!result){
            res.status(404)
                    .send({
                        status: false,
                        message: 'Usuário e/ou senha inválidos'
                    });
        }else{
            
            var token = jwt.sign(result, config.secret);
            
            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
              });
            
        }
        
        
    }).catch(function(err){
        console.log(err);
    });
};