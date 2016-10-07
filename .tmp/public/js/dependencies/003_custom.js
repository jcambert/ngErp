/**
 * A clone of the Node.js util.inherits() function. This will require
 * browser support for the ES5 Object.create() method.
 *
 * @param {Function} ctor
 *   The child constructor.
 * @param {Function} superCtor
 *   The parent constructor.
 */
angular.inherits = function (ctor, superCtor) {
 
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false
    }
  });
  
  ctor.prototype.$super = superCtor;
  ctor.prototype.constructor = ctor;
};

Function.prototype.extend = function(parent) {
  var Child = this;
  Child.prototype = parent;
  Child.prototype.$super = parent;
  Child.prototype = new Child(Array.prototype.slice.call(arguments,1));
  Child.prototype.constructor = Child;
}