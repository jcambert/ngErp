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

module.exports = function login(email,pwd){
    sails.log.debug(email+' : '+pwd);
    return get(email)
        .then(function(user){
            
            
            sails.log.info('login user:'+user   );
            
            //params.encrypted = user.encryptedPassword;
            return new Promise(function(resolve,reject){
              
                if(user==undefined)
                    reject(new Error('no user found'));
                else if(!user.enable)
                    reject(new Error('user not enabled'))
                else{
                    var p={password:pwd,encrypted:user.encryptedPassword}
                    check(p)
                        .then(function(){
                            var params={};
                            params.user=user.id;
                            params.activity='logged in at ' +new Date().toLocaleString(); 
                            activity(params,user).then(function(activity){ resolve(user);},function(err){ resolve(user);})
                        
                            },
                            function(err){reject(err);}
                        );
                    }
            });
            
        })
       
        ;
       
}