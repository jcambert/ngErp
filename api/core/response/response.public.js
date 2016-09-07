module.exports = function publicResponse(res){
    if(!res.locals.application)
        res.locals.application = sails.config.application.angular.public.application;
    if(!res.locals.controller)
        res.locals.controller = sails.config.application.angular.public.controller;
       
}