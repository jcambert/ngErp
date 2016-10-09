/**
 * ChiffrageModelOperation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      nom:{
          type:'string',
          unique:true,
          required:true
          
      },
      thprep:{
          type:'float',
          required:true
      },
      thope:{
          type:'float',
          required:true
      },
      tpsprep:{
          type:'float',
          required:true
      },
      help:{
          type:'string',
      },
      baseope:{
          type:'float',
          required:true
      }
  }
};

