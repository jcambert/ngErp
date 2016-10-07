'use strict;'
angular.module('ngErp')
.directive('back', function factory($window) {
      return {
        restrict   : 'E',
        replace    : true,
        
        template: '<md-button class="md-fab md-mini" aria-label="Add {{vm.resource}}" ng-click="navBack()">'+
                    '<md-icon>cancel</md-icon>'+ 
                    '<md-tooltip md-direction="bottom">Cancel saving {{vm.resource}}<md-tooltip>'+
                '</md-button>',
        link: function (scope, element, attrs) {
          scope.navBack = function() {
            $window.history.back();
          };
        }
      };
    });