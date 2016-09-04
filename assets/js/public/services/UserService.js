angular.module('ngErpModels')
.service('userService',['$log','$q', 'sailsResource', function($log,$q,sailsResource){
    var self=this;
    var User=sailsResource('user',{
        signup:{method:'POST',url:'/signup/'},
        login:{method:'GET',url:'/login/:email/:password'},
        logout:{method:'GET',url:'/logout'},
        session:{method:'GET',url:'/session'}
        //getByEmailAndPassword:{method:'GET',url:'/user/'}
    })
    
    self.signup = function(user){
        var ruser=new User();
        ruser.name=user.name;
        ruser.email=user.email;
        ruser.password=user.password;
        
        $log.log(ruser);
        return User.signup(ruser);//.then(function(u){ $log.log('userService.signup Ok');},function(err){$log.log('userService.signup failed');});
       /* User.signup(ruser,function(u){
            $log.log('userService.signup Ok');
        },function(err){
            $log.log('userService.signup failed');
        });*/
        //return ruser.signup();
    }
    
    self.signin = function(email,password){
        var deferred = $q.defer();
        User.login({email:email,password:password},
            function(user){
                deferred.resolve(user);
            },
            function(err){
                deferred.reject(err);
            }
        );
        return deferred.promise;
    }
    
    self.logout = function(){
        
    }
    
    self.session = function(){
        var d = $q.defer();
        User.session({},function(session){d.resolve(session.session);},function(err){d.reject(err)});
        return d.promise;
    }
}])