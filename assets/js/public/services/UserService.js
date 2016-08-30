angular.module('ngErpModels')
.service('userService',['$log','sailsResource', function($log,sailsResource){
    var self=this;
    var User=sailsResource('user',{
        signup:{method:'POST',url:'/signup/'},
        login:{method:'GET',url:'/login/:email/:password'}
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
        return User.login({email:email,password:password});
    }
    
}])