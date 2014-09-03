'use strict';

/**
 * @ngdoc function
 * @name homepageNewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homepageNewApp
 */
angular.module('homepageNewApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
