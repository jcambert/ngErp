/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
 // The user's full name
    // e.g. Nikola Tesla
    name: {
      type: 'string',
      required: true
    },

    enable:{
        type :'boolean',
        required:true,
        defaultsTo:true
    },

    // The user's email address
    // e.g. nikola@tesla.com
    email: {
      type: 'string',
      email: true,
      required: true,
      unique: true
    },

    // The encrypted password for the user
    // e.g. asdgh8a249321e9dhgaslcbqn2913051#T(@GHASDGA
    encryptedPassword: {
      type: 'string',
      required: true
    },

    // The timestamp when the the user last logged in
    // (i.e. sent a username and password to the server)
    lastLoggedIn: {
      type: 'date',
      required: true,
      defaultsTo: new Date(0)
    },

    // url for gravatar
    gravatarUrl: {
      type: 'string'
    },
    
    settings:{
        model:'UserSettings',
        unique:true
    },
    
    activities:{
        collection:'UserActivity',
        via:'user'
    },
    
    dps:{
        collection:'dp',
        via:'deviseur'
    }
  }
};

