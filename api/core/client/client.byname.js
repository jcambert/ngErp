var Promise = require('bluebird');
module.exports = function byname(req,res){
    return new Promise(function(resolve, reject){
         Client.find({},{select:['id','nom']})
         .exec(function(err,clients){
            
             if (err) {
                    return res.negotiate(err);
                }
                
             return res.json(clients);
             //reject(new Error('email not exist'));
         });
        
     });
}