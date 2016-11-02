var Promise = require('bluebird');

module.exports = function maxnumero(params){
    
    return new Promise(function(resolve, reject){
       var options={sort:'numero desc'};
		Dp.find(options).limit(1).exec(function(err,item){
            if(err)reject(err);
            if(item.length>0){
                sails.log(item[0]);
                var result=item[0];
                return resolve({numero:result.numero});
            }
            return resolve({numero:0});
        })
	});
}