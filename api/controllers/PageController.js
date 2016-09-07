/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 */

module.exports = {

	showHomePage: function (req, res) {
        sails.log.debug('Try show homepage')
        //sails.log(req.session);
        
        // If not logged in, show the public view.
        if (!req.session.user) {
            sails.log.debug('attempt to show dashboard to a non logged user');
            //res.locals.layout='layout';
            //using public layout
            res.locals.application = sails.config.application.angular.public.application;
            res.locals.controller = sails.config.application.angular.public.controller;
            return res.view('homepage'/*,{layout:'layout'}*/);
            //return res.goToHomePage();
        }

        sails.log.debug('try to find user:'+req.session.user.id);    
        // Otherwise, look up the logged-in user and show the logged-in view,
        // bootstrapping basic user data in the HTML sent from the server
        User.findOne({id:req.session.user.id}).exec( function (err, user){
            if (err) {
                sails.log.debug(err);
                return res.negotiate(err);
            }

            if (!user) {
                sails.log.debug('Session refers to a user who no longer exists- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
                 res.locals.application = sails.config.application.angular.public.application;
                res.locals.controller = sails.config.application.angular.public.controller;
                return res.view('homepage');
            }
            sails.log.debug('User '+user.name +' login. Show Dashboard');
            res.locals.application = sails.config.application.angular.erp.application;
            res.locals.controller = sails.config.application.angular.erp.controller;
            res.locals.layout='layouts/dashboard';
            res.locals.user= {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    title: user.title,
                    isAdmin: !!user.admin,
                    gravatarUrl: user.gravatarUrl
                };
            return res.view('dashboard');
            
      });
      sails.log.debug('OUPS !!!');
      
      
  },
  
  signup: function(req,res){
      if(req.session.user){
          sails.log.verbose(req.session.user.name +' already log. logout before trying signup');
          return res.view();
      }
      
      res.locals.application=sails.config.application.angular.signup.application;
      res.locals.controller=sails.config.application.angular.signup.controller;
      return res.view('signup');
  }
};