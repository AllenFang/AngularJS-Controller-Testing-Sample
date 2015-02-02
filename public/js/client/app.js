'use strict';


// Declare app level module which depends on filters, and services
angular.module('sampleApp', [])
	.controller("SampleCtrl", function($scope){
        $scope.counter = 1;
        
        $scope.add = function(){
            $scope.counter++;
        };

        $scope.minus = function(){
            $scope.counter--;
        }
    });
