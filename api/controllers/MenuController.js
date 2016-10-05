/**
 * MenuController
 *
 * @description :: Server-side logic for managing menus
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    byname:function(req,res){
        sails.log.debug('get menu byname:'+req.params.name)
        Menu.findOne({name:req.params.name}).populate('items').exec(function(err,item){
            if(err)return res.negotiate(err);
            return res.json(item);
        })
    },
    left:function(req,res){
        Menu.find({left:true}).exec(function(err,menus){
            if(err) return res.negotiate(err);
            return res.json(menus);
        })
    }
};

