/**
 * DpController
 *
 * @description :: Server-side logic for managing dps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	lastnumber : function(req,res){
        var upsert=('save' in req.params);
        Dp.find({sort:'numero DESC'}).limit(1)
        .exec(
            function(err,item){
                if(err) return res.negotiate(err);
                sails.log.debug('try fin Dp last number:'+item);
                if(item.length == 0)
                    item={numero:0};
                if(upsert){
                    Dp.create({numero:item.numero+1})
                    .exec(function(err,newItem){
                        if(err) return res.negotiate(err);
                         return res.json(newItem);
                    })
                }
                else
                    return res.json(item);
        });
    }
};

