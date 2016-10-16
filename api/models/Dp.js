/**
 * Dp.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      numero:{
          type: 'integer',
          autoIncrement:true,
          required:true,
          //unique:true
      },
      client:{
          model:'client',
          //required:true
      },
      deviseur:{
          model: 'user',
          //required:true
      },
      version:{
          //collection:'DpVersion',
          //via:'dp'
          
          type: 'integer',
          required:true,
          defaultsTo:0
      },
      referenceclient:{
          type: 'string',
      },
      datearendreprevue:{
          type: 'string'
      },
      commercial:{
          type:'string'
      },
      solde:{
          type: 'boolean',
          defaultTo: false
      },
      articles:{
          collection: 'article',
          via:'dp',
          through:'dparticle',
          dominant: true
      }
  }
};

