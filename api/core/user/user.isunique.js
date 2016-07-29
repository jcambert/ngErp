module.exports = function isunique(params){
     if( !('email' in params)  ){
        sails.log.error('isunique function must have \'email\' in params');
    }
     return new Promise(function(resolve, reject){
         User.count({email:params.email})
         .exec(function(err,found){
             if(err)reject(err);
             if(found>0)reject('email allready exists');
             resolve();
         })
        
     });
}