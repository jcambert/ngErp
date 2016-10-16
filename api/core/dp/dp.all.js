var Promise = require('bluebird');

module.exports = function copy(params){
    
    return new Promise(function(resolve, reject){
		Dp.find({where:{solde:false},sort:'numero desc'}).exec(function(err,item){
            if(err)reject(err);// return  res.negotiate(err);
            return resolve(item);// res.json(item);
        })
	});
}