var Promise = require('bluebird');

module.exports = function lastVersion(params){
    if( !('numero' in params)  ){
        sails.log.error('lastVersion must have numero in params');
    }
    return new Promise(function(resolve, reject){
		Dp.find(params.id).sort('version DESC').exec(function(err,items){
            if(err)reject(err);
            
            resolve(_.head(items));
        })
	});
}