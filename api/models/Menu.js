/**
 * Menu.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	name:{
        type:'string',
        required:true,
        unique:true
    },
    items:{
        collection:'MenuItem',
        via:'menu'
    },
    icon:{
        type:'string'
    },
    state:{
        type:'string'
    },
    left:{
        type:'boolean'
    },
    center:{
        type:'boolean'
    }
    
  }
};

