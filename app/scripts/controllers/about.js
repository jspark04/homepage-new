'use strict';

/**
 * @ngdoc function
 * @name homepageNewApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the homepageNewApp
 */
angular.module('homepageNewApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
