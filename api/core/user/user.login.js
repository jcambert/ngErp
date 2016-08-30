var Promise = require('bluebird');

var get = function(params){
    return erp.user.get(params);
};
var check = function(params){
    return erp.user.checkpwd(params);
}
var activity = function(params,user){
    return erp.useractivity.add(params.activity,user);
}

module.exports = function login(params){
    sails.log.debug(params('email')+' : '+params('password'));
    return get(params('email'))
        .then(function(user){
            sails.log.info('login user:'+user   );
            var p={password:params('password'),encrypted:user.encryptedPassword}
            //params.encrypted = user.encryptedPassword;
            return new Promise(function(resolve,reject){
               check(p)
                .then(function(){
                    params.activity='logged in at ' +new Date().toLocaleString(); 
                    activity(params,user).then(function(activity){ resolve(user);},function(err){ resolve(user);})
                   
                    },
                    function(err){reject(err);}
                ); 
            });
           
        })
        ;
       
}