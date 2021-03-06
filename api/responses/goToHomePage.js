module.exports = function goToHomePage (statusCode){

  // Get access to `req` and `res`
  // (since the arguments are up to us)
  var req = this.req;
  var res = this.res;

  // All done- either send back an empty response w/ just the status code
  // (e.g. for AJAX requests)
  if (req.wantsJSON) {
    return res.send(statusCode||200);
  }
  res.locals.application = sails.config.application.angular.application;
  res.locals.controller = sails.config.application.angular.publicController;
  //return res.view('homepage'/*,{layout:'layout'}*/);
  // or redirect to the home page
  return res.redirect('/');
};