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
          require:true,
          unique:true
      },
      designation:{
          type: 'string',
      },
      indice:{
          type: 'string'
      },
      dps:{
          collection: 'dp',
          via: 'article',
          through:'dparticle'
          
      },
      chiffrage:{
          model:'chiffrage',
          unique:true
      }
  }
};

