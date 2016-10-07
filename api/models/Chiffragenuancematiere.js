/**
 * Chiffragenuancematiere.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      nom:{
        type: 'string',
        required:true,
        unique : true  
      },
      matiere:{
        model:'matiere',
      },
      chiffragesmatiere:{
          collection:'Chiffragematiere',
          via:'nuance'
      },
      prix:{
          type:'float',
          required:true
      }
  }
};

