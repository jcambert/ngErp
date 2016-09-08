/**
 * Chiffrageformattole.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      chiffragecalculmatiere:{
          model:'Chiffragecalculmatiere',
          via:'formattole'
      },
      dispo:{
          type: 'boolean',
          required:true,
          defaultTo: true
      },
      selectionne:{
          type:'boolean',
          required:true
      },
      longueur:{
          type: 'integer',
          required:true
      },
      largeur:{
          type: 'integer',
          required: true
      },
      
  }
};

