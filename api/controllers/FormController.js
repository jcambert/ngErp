/**
 * FormController
 *
 * @description :: Server-side logic for managing forms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	byname:function(req,res){
        Form.findOne({nom:req.params.name}).exec(function(err,item){
            if(err)return res.negotiate(err);
            return res.json(item);
        })
    }
};

