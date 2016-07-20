module.exports = function emailAddressInUse (){

  // Get access to `res`
  // (since the arguments are up to us)
  var res = this.res;
  var req = this.req;
  var locale = 'en';
  if(req.param('locale'))
    locale = req.param('locale') 
  return res.send(409, sails.__({phrase:'Email address is already taken by another user.',locale:locale}));
};