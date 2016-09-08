/**
 * Contact.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      nom:{
          type: 'string',
          required:true,
      },
      prenom:{
          type: 'string'
      },
      civilite:{
          type: 'string'
      },
      email:{
          type: 'string'
      },
      telephone:{
          type: 'string'
      },
      fax:{
          type: 'string'
      },
      adresse:{
          type: 'string'
      },
      codepostal:{
          type: 'string'
      },
      ville:{
          type: 'string'
      },
     client:{
          model:'Client'
      }
  }
};

