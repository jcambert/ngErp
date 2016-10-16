var Promise = require('bluebird');

module.exports = function solder(params){
    if( !('id' in params) && !('numero' in params)  ){
        sails.log.error('solder must have id or numero in params');
    }
    if('id' in params)
        return new Promise(function(resolve, reject){
            
            
            Dp.findOne(params.id).exec(function(err,item){
                if(err)reject(err);
                if(_.isUndefined(item))
                    reject({msg:'solder with this id does not exist'});
                item.solde=true;
                item.save();
                sails.log('item with id '+params.id+' was solded');
                resolve(item);
            })
        });
    else
        return new Promise(function(resolve, reject){
            Dp.update({numero:params.numero},{solde:true}).exec(function(err,updated){
                if(err)reject(err);
                resolve({result:true});
            })
        });
    
}