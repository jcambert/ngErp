/**
 * Article.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      reference:{
          type: 'string',
          required:true,
          unique:true
      },
      designation:{
          type: 'string',
      },
      indice:{
          type: 'string',
          defaultsTo:'0'
      },
      dps:{
          collection: 'dp',
          via: 'article',
          through:'dparticle'
          
      },
      chiffrages:{
          collection:'chiffrage',
          via:'article'
      }
  }
};

