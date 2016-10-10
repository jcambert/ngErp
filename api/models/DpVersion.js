/**
 * DpVersion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
        version:{
            type:'integer',
            required:true,
            defaultsTo:0
        },
        dp:{
            model:'Dp',
            via:'versions'
        }
  }
};

