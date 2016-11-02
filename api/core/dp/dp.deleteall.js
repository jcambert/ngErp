var Promise = require('bluebird');

module.exports = function deleteall(params){
    
    return new Promise(function(resolve, reject){
       
		Dp.destroy(params ||{}).exec(function(err,item){
            if(err)reject(err);// return  res.negotiate(err);
            return resolve(item);// res.json(item);
        })
	});
}