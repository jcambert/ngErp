/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 */

module.exports = {

	showHomePage: function (req, res) {
    
        sails.log(req.session);
        // If not logged in, show the public view.
        if (!req.session.user) {
            sails.log('attempt to show dashboard to a non logged user');
            res.locals.layout='layout';
            return res.view('homepage',{layout:'layout'});
        }

        // Otherwise, look up the logged-in user and show the logged-in view,
        // bootstrapping basic user data in the HTML sent from the server
        User.findOne(req.session.user, function (err, user){
            if (err) {
                return res.negotiate(err);
            }

            if (!user) {
                sails.log.verbose('Session refers to a user who no longer exists- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
                return res.view('homepage',{layout:'layout'});
            }

            return res.view('dashboard', {
                layout:'layout',
                me: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    title: user.title,
                    isAdmin: !!user.admin,
                    gravatarUrl: user.gravatarUrl
                }
            });
      });
  },
};