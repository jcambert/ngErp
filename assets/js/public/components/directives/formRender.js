'use strict;'

/*String.prototype.isHtmlTemplate = function(){
    return  angular.isString(this) && this.endsWith('.html');
}*/

angular.module('ngDynamic',[])
.constant('attribute','attribute')
.run(['dynBuilder', function(dynBuilder){
    dynBuilder.loadTemplates();
}])
.provider('dynFormConfig',['attribute',function($templateCache,attribute){
    
    var templates={
            name:'attribute',
            row:'ng-row',
            input:'dyn.input.html',
    };
    var directory='templates/component/dynform/';
    var isHtmlTemplate = function(template){
        return angular.isString(template) && template!='attribute' && template.endsWith('.html');
    };
    var isAttribute = function(template){
        return angular.isString(template) && template === 'attribute'; 
    }
    var getTemplates = function(){
        var res={};
        angular.forEach(templates,function(value,key){
            //$log.log('make templates for :'+key);
            if(isHtmlTemplate(templates[key]))
                res[key]=directory+templates[key]; 
            else
                res[key]=templates[key];
        });
        return res;
    }        
    return {
        setTemplates:function(tpls){
            angular.extend(templates,tpls);
        },
        setTemplatesDirectory:function(dir){
            if(angular.isString(dir))
                directory=dir;
        },
        
        $get:function(){
            return {
               isHtmlTemplate :isHtmlTemplate,
               isAttribute:isAttribute,
               templates:getTemplates
            }
        }
        
    }
}])
.service('dynBuilder',['$log','$templateCache','$http','dynFormConfig',function($log,$templateCache,$http,dynFormConfig){
    var self=this;
    var templateLoaded=false;
    var templates=dynFormConfig.templates();
    console.dir(templates);
    this.loadTemplates=function(){
        if(templateLoaded)return;
        angular.forEach( templates,function(value,key){
            if(dynFormConfig.isHtmlTemplate(templates[key]))
                $http.get(value,{cache:$templateCache});
        });
        templateLoaded=true;
    };
    
    this.build = function(elt,template){
        //console.dir(template);
        console.dir(templates.length);
        angular.forEach(template,this.buildField,elt);
    }
    this.buildElement = function(elt){
        return angular.element('<'+elt+'></'+elt+'>');
    }
    this.buildField = function(value,key){
        
        if(!angular.isDefined(templates[key]))return;
        $log.log('Build field:'+key);
        //console.dir(templates[key]);
        if(dynFormConfig.isAttribute(templates[key])){
            setAttribute(this,key,value);
            //templates[key](this,key,value);
        }else if( dynFormConfig.isHtmlTemplate(templates[key])){
            $log.log('append Html template');
            this.append($templateCache.get(templates[key]));
        }
        else {
            $log.log('Build element:'+key);
            var elt=angular.element(self.buildElement(templates[key]));
            if(angular.isArray(value)){
                setAttribute(elt,'json-template',angular.toJson(value));
                console.dir(value);
            }
            this.append(elt);
        }
    }
    
    function setAttribute(element,key,value){
        $log.log('setAttribute '+key + ' to value '+value);
        element.attr(key,value);
    }
}])
.directive('dynForm',['$q','$parse','$http','$templateCache','$compile','$log','dynBuilder',function($q,$parse,$http,$templateCache,$compile,$log,dynBuilder){
    return {
        restrict:'E',
        link:function($scope,element,attrs){
            $log.log('formRender link');
            var root = angular.element('<ng-form></ng-form>');
            

            
           
            
           /* angular.forEach(templates,function(value,key){
               $log.log('load templates for :'+key);
                if(isHtmlTemplate(templates[key]))
                    templates[key]='templates/component/dynform/'+templates[key]; 
            });*/
            
            /*var buildElement = function(elt){
                return angular.element('<'+elt+'></'+elt+'>');
            }
            */
            
            /*var buildField = function(value,key){
                $log.log('Build field:'+key);
                if(_.isFunction(templates[key])){
                    templates[key](this,key,value);
                }else if(isHtmlTemplate(templates[key])){
                    $log.log('append Html template');
                    this.append($templateCache.get(templates[key]));
                }
                else{
                    $log.log('Build element:'+key);
                    var elt=angular.element(buildElement(templates[key]));
                    if(angular.isArray(value)){
                        setAttribute(elt,'json-template',angular.toJson(value));
                        console.dir(value);
                    }
                    this.append(elt);
                }
            }*/
            
           /* function setAttribute(element,key,value){
                $log.log('setAttribute '+key + ' to value '+value);
                element.attr(key,value);
            }*/
            
            //in provider now
            //if(angular.isDefined($scope.templates))angular.extend(templates,$scope.templates)
            
            if(angular.isDefined(attrs.jsonTemplate) || angular.isDefined(attrs.jsonTemplateUrl)){
                (attrs.jsonTemplate?
                    $q.when($parse(attrs.jsonTemplate)($scope)):
                    $http.get(attrs.jsonTemplateUrl,{cache:$templateCache}).then(function(result){return result.data;}))
                .then(function(template){
                    $log.log("Have a template");
                    
                    //in provider now
                    //load dynamic form templates
                    /*angular.forEach( templates,function(value,key){
                        if(isHtmlTemplate(templates[key]))
                            $http.get(value,{cache:$templateCache});
                    });*/
                    
                    //root.attr('name',template.name || 'thisform');
                    
                    //angular.forEach(template,buildField,root);
                    dynBuilder.build(root,template);
                    $compile(root)($scope);
                    element.replaceWith(root);
                })
                
                
                .then(function(){
                    
                })
                ;
            }else{
                $compile(root)($scope);
                element.replaceWith(root);
            }
        }
    }
}])

.directive('ngRow',['dynBuilder',function(dynBuilder){
    return{
        restrict:'E',
        replace:true,
        templateUrl:'templates/component/dynform/dyn.row.html',
        link:function(scope,element,attrs){
            if(angular.isDefined(attrs.jsonTemplate)){
                dynBuilder.build(element,attrs.jsonTemplate)
            }
        }
    }
}])
;