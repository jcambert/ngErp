/**
 * HelperController
 *
 * @description :: Server-side logic for managing Helpers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getPorts:function(req,res){
        return res.json({0:"Départ usine",1:"Franco",2:"Enlevement client"});
    },
    getDelais:function(req,res){
        return res.json({0:"1 Semaine",1:"2 Semaines",2:"3 Semaines"});
    },
    getReglements:function(req,res){
        return res.json({0:"A Convenir",1:"A l'enlevement",2:"Habituel"});
    },
    getCausesDeclines:function(req,res){
        return res.json({0:"Non Solde",1:"Trop Cher",2:"Non Abouti"});
    },
    
};

