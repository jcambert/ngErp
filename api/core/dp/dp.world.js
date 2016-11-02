var Promise = require('bluebird');

module.exports = function world(params){
    
    return new Promise(function(resolve, reject){
        var defaultOptions={sort:'numero desc'};
        var options={};
        _.extend(options,defaultOptions,params);
        sails.log(options);
		Dp.find(options).populate('client').populate('articles').exec(function(err,item){
            if(err)reject(err);// return  res.negotiate(err);
            return resolve(item);// res.json(item);
        })
	});
}