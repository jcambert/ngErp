var Promise = require('bluebird');
var Gravatar = require('machinepack-gravatar');

module.exports = function gravatar(params){
    if( !('email' in params)  ){
        sails.log.error('gravatar function must have \'email\' in params');
    }
    return new Promise(function(resolve, reject){
		Gravatar.getImageUrl({
          emailAddress: params.email
        }).exec({
          error: function(err) {
            return reject(err);
          },
          success: function(gravatarUrl) {
              resolve(gravatarUrl);
          },
        });
	});
}