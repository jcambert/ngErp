
var Promise = require('bluebird');
module.exports = function get(params){
    
   return new Promise(function(resolve, reject){
         User.findOne({email:params.email})
         .exec(function(err,user){
             sails.log.debug(user);
             if(err)reject(err);
             resolve(user);
             //reject(new Error('email not exist'));
         })
        
     });
    
};