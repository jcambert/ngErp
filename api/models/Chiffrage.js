/**
 * Chiffrage.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      article:{
        model:'article'  
      },
      indice:{
          type:'integer',
          required:true,
          defaultTo:0,
      },
      designationIndice:{
          type:'string',
      },
      matieres:{
          collections:'chiffragematiere',
          via:'chiffrage'
      },
      composants:{
          collection:'chiffragecomposant',
          via:'chiffrage'
      },
      operations:{
          collection:'chiffrageoperation',
          via:'chiffrage'
      },
      traitementssurface:{
          collection:'chiffragets',
          via:'chiffrage'
      },
      usinages:{
          collection:'chiffrageusinage',
          via:'chiffrage'
      },
      tarifs:{
          collection:'chiffragetarif',
          via:'chiffrage'
      },
      etudesmethodes_temps:{
          type: 'float',
          required:true
      },
      etudesmethodes_cout:{
          type: 'integer',
          required:true
      },
      fad:{
        type: 'integer'    
      },
      outillage:{
          type: 'integer'
      },
      commentaire:{
          type: 'mediumtext'
      },
      difficulte:{
          type: 'string'
      },
      delai:{
          type: 'string'
      },
      traitement:{
          type:'string'
      }
  }
};

