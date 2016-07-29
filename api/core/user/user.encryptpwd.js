
var Promise = require('bluebird');
var Passwords = require('machinepack-passwords');
module.exports = function encryptpwd(params){
    return new Promise(function(resolve,reject){
        if( !('password' in params)  ){
            sails.log.error('encryptpwd function must have \'password\' in params');
        }
        Passwords.encryptPassword({
                password: params.password,
                difficulty: 10,
            }).exec({
            // An unexpected error occurred.
            error: function (err){
                reject(err);
            },
            // OK.
            success: function (result){
                resolve(result);
            },
        });
    });
    
}