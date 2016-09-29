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
            input:'ng-input',
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
    var json={};
    var flatjson={};
    var counter=0;
    console.dir(templates);
    this.loadTemplates=function(){
        if(templateLoaded)return;
        angular.forEach( templates,function(value,key){
            if(dynFormConfig.isHtmlTemplate(templates[key]))
                $http.get(value,{cache:$templateCache});
        });
        templateLoaded=true;
    };
    
    this.findById = function(id){
        return _.find(json,function(o){return o.id==id;});
    }
    
    this.generateId = function(){
        var result= "db-"+(counter++);
        console.dir('generate id:'+result);
        return result;
    }
    
    
    this.setJson = function(tpl){
        json=tpl;
    }
    
    this.build = function(elt,id){
        if(id){
            
        }else{
            if(angular.isObject(json) && (!('id' in json)))
                json.id=self.generateId();
                console.dir(json);
            angular.forEach(json,this.buildField,elt);
        }
    }
    
    

    this.buildElement = function(elt,id){
        var res= angular.element('<'+elt+'></'+elt+'>');
        console.dir(id);
        if(id)
            res.attr('id',id);
        return res;
    }
    this.buildField = function(value,key){
        console.dir('value:'+value);
        console.dir('key:'+key);
     
        //if(!('id' in flatjson[key]))
        if(angular.isObject(json))
            json[key].id=self.generateId();
        
        console.dir(json);
        
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
            $log.log('Build element:'+key+ ' with key:'+json[key].id);
            var elt=angular.element(self.buildElement(templates[key],json[key].id));
            /*if(angular.isArray(value)){
                setAttribute(elt,'json-template',angular.toJson(value));
                console.dir(value);
            }*/
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
            if(!angular.isDefined(attrs.id))
                attrs.id=dynBuilder.generateId();
            var root =  dynBuilder.buildElement('ng-form',attrs.id);
            

            
           
            
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
                .then(function(json){
                    $log.log("Have a template");
                    
                    //in provider now
                    //load dynamic form templates
                    /*angular.forEach( templates,function(value,key){
                        if(isHtmlTemplate(templates[key]))
                            $http.get(value,{cache:$templateCache});
                    });*/
                    
                    //root.attr('name',template.name || 'thisform');
                    
                    //angular.forEach(template,buildField,root);
                    dynBuilder.setJson(json);
                    dynBuilder.build(root);
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
            if(angular.isDefined(attrs.id)){
                dynBuilder.build(element,attrs.id);
            }
        }
    }
}])

.directive('ngInput',['dynBuilder',function(dynBuilder){
    return{
        restrict:'E',
        replace:true,
        templateUrl:'templates/component/dynform/dyn.input.html',
        link:function(scope,element,attrs){
            console.dir(attrs.id);
            scope.dyn=dynBuilder.findById(attrs.id);
            if(angular.isDefined(attrs.id)){
                dynBuilder.build(element,attrs.id);
            }
        }
    }
}])
;