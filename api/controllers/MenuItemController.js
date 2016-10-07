/**
 * MenuItemController
 *
 * @description :: Server-side logic for managing Menuitems
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	bystate:function(req,res){
        sails.log.debug('get menu bystate:'+req.params.state)
        MenuItem.findOne({state:req.params.state}).exec(function(err,item){
            if(err)return res.negotiate(err);
            return res.json(item);
        })
    },
};

