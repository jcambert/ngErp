var Promise = require('bluebird');
var join = Promise.join;
var encrypt = function(params){
    return erp.user.encryptpwd(params);
};
var isunique = function(params){
    return erp.user.isunique(params);
};
var gravatar = function(params){
    return erp.user.gravatar(params);  
};
module.exports = function signup(params){
    return join(isunique(params),encrypt(params),gravatar(params),function(runique,rencrypted,rgravatar){
        sails.log.debug('signup join');
        delete params.password;
        params.encryptedPassword = rencrypted;
        params.gravatarUrl = rgravatar;
        return erp.user.create(params);
    })
    
}

