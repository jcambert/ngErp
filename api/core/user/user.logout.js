var Promise = require('bluebird');

var get = function(params){
    return erp.user.get(params);
};

var activity = function(params,user){
    return erp.useractivity.add(params.activity,user);
}

module.exports = function logout(params){
    sails.log.debug('LOGOUT');
    return get(params.user)
        .then(function(user){
            sails.log.info('logout user:'+user   );
           
            return new Promise(function(resolve,reject){
                    params.activity='logout in at ' +new Date().toLocaleString(); 
                    activity(params,user).then(function(activity){ resolve(user);},function(err){ resolve(user);})
            });
        });
}