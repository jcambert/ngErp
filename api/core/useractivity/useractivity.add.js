var Promise = require('bluebird');



module.exports = function add(activity,user){
   return new Promise(function(resolve, reject){
       
         UserActivity.create({activity:activity,user:user.id})
         .exec(function(err,activity){
             
             if(err)reject(err);
             resolve(activity);
             //reject(new Error('email not exist'));
         })
        
     });
       
}