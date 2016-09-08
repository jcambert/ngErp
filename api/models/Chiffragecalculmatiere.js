/**
 * Chiffragecalculmatiere.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      chiffragematiere:{
          model:'Chiffragematiere',
          via:'calcul'
      },
      longueur:{
          type: 'integer',
          required:true
      },
      largeur:{
          type: 'integer',
          required: true
      },
      epaisseur:{
          type: 'float',
          required:true
      },
      matiere:{
          model:'matiere',
          required: true
      },
      squelettex:{
          type: 'integer',
          required:true,
      },
      squelettey:{
          type: 'integer',
          required: true
      },
      pince:{
          type: 'integer',
          required: true
      },
      formattole:{
          collection:'chiffrageformattole',
          via:'chiffragecalculmatiere'
      }
  }
};

