var User = require('./../Entity/User');


module.exports = function(req, res){
    
    var find = User.find().exec();
    find.then(function(result){
        res.json(result);
    }).catch(function(err){
        console.log(err);
    });
};