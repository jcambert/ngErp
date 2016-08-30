/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    login:function(req,res,next){
        sails.log.info(req.param('email') + ' try to login');
        erp.user.login(req.param)
            .then(function(user){
                req.session.user=user;
                req.session.authenticated=true;
                req.session.trueHuman = true;
                sails.log.info(user.name + ' is logged in');
                sails.log.debug(req.session);
                return res.json({
                    user: user
                });
            })
            .catch(function(err){
                 return res.negotiate(err);
            });
       
    },
    logout:function(req,res){
        if(!req.session.authenticated)return res.goToHomePage();
        sails.log.info(req.param('email') + ' try to logout');
        erp.user.logout(req.session)
            .then(function(){
                req.session.user=null;
                req.session.authenticated = false;
                req.session.trueHuman = false;
                sails.log(req.param('email') + ' is logout');
                return res.goToHomePage();
            })
            .catch(function(err){
                return res.negotiate(err);
            });
    },
    signup:function(req,res,next){
        sails.log.info('Try to signup new user');
        erp.user.signup(req.body)
            .then(function(user){
                sails.log.info('new user as '+ user.email +' was signup');
                 return res.json({
                    user: user
                });
            })
             .catch(function(err){
                 return res.negotiate(err);
            });
    }
	 /**
   * Sign up for a user account.
   *//*
  signup: function(req, res,next) {
    sails.log.debug("signup a user");
    var Passwords = require('machinepack-passwords');

    // Encrypt a string using the BCrypt algorithm.
    Passwords.encryptPassword({
      password: req.param('password'),
      difficulty: 10,
    }).exec({
      // An unexpected error occurred.
      error: function(err) {
        return res.negotiate(err);
      },
      // OK.
      success: function(encryptedPassword) {
        require('machinepack-gravatar').getImageUrl({
          emailAddress: req.param('email')
        }).exec({
          error: function(err) {
            return res.negotiate(err);
          },
          success: function(gravatarUrl) {
          // Create a User with the params sent from
          // the sign-up form --> signup.ejs
            User.create({
              name: req.param('name'),
              email: req.param('email'),
              encryptedPassword: encryptedPassword,
              lastLoggedIn: new Date(),
              gravatarUrl: gravatarUrl
            }, function userCreated(err, newUser) {
              if (err) {

                console.log("err: ", err);
                console.log("err.invalidAttributes: ", err.invalidAttributes)

                // If this is a uniqueness error about the email attribute,
                // send back an easily parseable status code.
                if (err.invalidAttributes && err.invalidAttributes.email && err.invalidAttributes.email[0]
                  && err.invalidAttributes.email[0].rule === 'unique') {
                  return res.emailAddressInUse();
                }

                // Otherwise, send back something reasonable as our error response.
                return res.negotiate(err);
              }

              // Log user in
              req.session.me = newUser.id;

              // Send back the id of the new user
              return res.json({
                id: newUser.id
              });
            });
          }
        });
      }
    });
  },*/
};

