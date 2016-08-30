
var Promise = require('bluebird');
module.exports = function get(email){
    
   return new Promise(function(resolve, reject){
         User.findOne({email:email})
         .exec(function(err,user){
             sails.log.debug(user);
             if(err)reject(err);
             resolve(user);
             //reject(new Error('email not exist'));
         })
        
     });
    
};