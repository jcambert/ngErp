/**
 * DpController
 *
 * @description :: Server-side logic for managing dps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    //Return all dp that are not soldes
	find : function(req,res){
       erp.dp.all(req.params).then(function(items){return res.json(items);}).catch(function(err){return res.negotiate(err);});
    },
    
    all : function(req,res){
        erp.dp.world( req.params).then(function(items){return res.json(items);}).catch(function(err){return res.negotiate(err);});
    },
    deleteAll: function(req,res){
        erp.dp.deleteall().then(function(){return res.ok();})
    },
    info:function(req,res){
        if(_.isUndefined( req.params.id) )
            return res.badRequest({message:erp.locale.message(req,res,'Id needed for this request')});// res.idRequested();
         Dp.findOne({id:req.params.id}).populate('articles').exec(function(err,item){
            if(err)return res.negotiate(err);
            if(_.isUndefined( item) )
                return res.badRequest({message:erp.locale.message(req,res,'No Dp with id:'+req.params.id)} );
                //sails.log(item.articles);
               
               erp.dp.lastVersion({numero:item.numero}).then(
                   function(item){
                       sails.log('last version of DP N°'+item.numero+' is '+item.version);
                       sails.log(item.version);
                });
               
                return res.json(item);
         });
    },
    copy: function(req,res){
        
       if(_.isUndefined( req.params.id) )
            return res.badRequest({message:erp.locale.message(req,res,'Id needed for this request')});// res.idRequested();
       erp.dp.copy(req.params).then(
            function(item){
                return res.json(item);
            }).catch(
            function(err){
                return res.badRequest(err);
            })
    },
    
    maxnumero : function(req,res){
        erp.dp.maxnumero( req.params).then(function(item){return res.json(item);}).catch(function(err){return res.negotiate(err);});
    }
};

