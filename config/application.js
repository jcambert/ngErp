module.exports.application = {
    author: 'Ambert Jean-Christophe',
    name:'NgErp',
    version:'0.0.1',
    angular:{
        erp:{
            application:'ngErp',
            controller:'MainController'
        },
        public:{
            application:'ngPublic',
            controller:'PublicController'
        },
        signup:{
            application:'ngErpSignup',
            controller:'SignupController'
        }
    }
   
};