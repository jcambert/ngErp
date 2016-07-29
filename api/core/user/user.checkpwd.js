
var Promise = require('bluebird');
var Passwords = require('machinepack-passwords');
module.exports = function checkpwd(params){
    return new Promise(function(resolve,reject){
        if( !('password' in params) || !('encrypted' in params) ){
            sails.log.error('checkpwd function must have \'password\' and \'encrypted\' in params');
        }
        Passwords.checkPassword({
                passwordAttempt: params.password,
                encryptedPassword: params.encrypted,
            }).exec({
            // An unexpected error occurred.
            error: function (err){
                reject(err);
            },
            // Password attempt does not match already-encrypted version
            incorrect: function (){
                reject('Bad password')
            },
            // OK.
            success: function (){
                resolve();
            },
        });
    });
    
}