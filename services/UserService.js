angular.module('ngErpModels')
.service('userService',['$log','$q', 'sailsResource', function($log,$q,sailsResource){
    var self=this;
    var User=sailsResource('user',{
        signup:{method:'POST',url:'/signup/'},
        signin:{method:'GET',url:'/signin/:email/:password'},
        signout:{method:'GET',url:'/signout'},
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
        User.signin({email:email,password:password},
            function(user){
                deferred.resolve(user);
            },
            function(err){
                deferred.reject(err);
            }
        );
        return deferred.promise;
    }
    
    
    self.session = function(){
        var d = $q.defer();
        User.session({},function(session){d.resolve(session.session);},function(err){d.reject(err)});
        return d.promise;
    }
}])