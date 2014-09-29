'use strict';

/**
 * @ngdoc function
 * @name homepageNewApp.controller:ResumeCtrl
 * @description
 * # ResumeCtrl
 * Controller of the homepageNewApp
 */
angular.module('homepageNewApp')
  .controller('ResumeCtrl', function ($scope) {

    $scope.test = 'test';

    //Set background images
    $('html').removeClass();
    $('html').addClass('resume-bg');

  });
