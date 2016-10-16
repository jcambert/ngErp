var Promise = require('bluebird');

module.exports = function copy(params){
    if( !('id' in params)  ){
        sails.log.error('solder must have id in params');
    }
    return new Promise(function(resolve, reject){
		Dp.findOne({id:params.id}).populate('articles').exec(function(err,item){
            if(err)reject(err);
            if(_.isUndefined( item) )
                reject(new Error('No Dp with id:'+params.id));
            else{
                sails.log(item);
                
                var newItem=_.clone(item);
                
                erp.dp.lastVersion({numero:item.numero}).then(
                    function(lastItem){
                        sails.log('last version of DP N°'+item.numero+' is '+item.version);
                        sails.log(item.version);
                        newItem.version=lastItem.version+1;
                        newItem.solde=false;
                        delete newItem.id;
                        delete newItem.createdAt;
                        delete newItem.updatedAt;
                        sails.log('new dp cloned');
                        //sails.log(newItem);
                        //sails.log(item.articles);
                        _.forEach(item.articles,function(article){
                            if(!_.isFunction(article))
                                newItem.articles.add(article);
                            
                        });
                        
                        
                        sails.log(newItem);
                        erp.dp.solder({numero:item.numero}).then(function(){
                            Dp.create(newItem).exec(function(err,newitem){
                                if(err)reject(err);
                                resolve(newitem);
                            });
                        }).catch(function(err){reject(err);});
                    
                    
                });
            
            }
           
        })
	});
}