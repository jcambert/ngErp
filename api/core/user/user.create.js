var Promise = require('bluebird');

module.exports = function create (user){
    return new Promise(function(resolve,reject){
        // creating in DB the user
        User.create(user).exec(function(err,newuser){
            if(err)reject(err);
            resolve(newuser);
        })
        
    });
    
};