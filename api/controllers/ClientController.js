/**
 * ClientController
 *
 * @description :: Server-side logic for managing clients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	byname:function(req,res){
        sails.log.debug('get clients by name')
        //return erp.client.byname();
        return erp.client.byname(req,res);
    }
};

