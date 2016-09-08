/**
 * Chiffragematiere.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      chiffrage:{
          model:'chiffrage',
          via: 'matieres'
      },
      nuance:{
          model:'chiffragenuancematiere',
          via:'matiere'
      },
      longueur:{
          type: 'integer',
          required:true
      },
      largeur:{
          type: 'integer',
          required:true
      },
      epaisseur:{
          type: 'float',
          required:true
      },
      quantite:{
          type: 'integer',
          required:true
      },
      poids:{
          type: 'float',
          required:true
      },
      prix:{
          type: 'float',
          required:true
      },
      calcul:{
          model:'chiffragecalculmatiere',
          via:'chiffragematiere'
      }
      
  }
};

