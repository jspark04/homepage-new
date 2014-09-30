'use strict';

/**
 * @ngdoc function
 * @name homepageNewApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the homepageNewApp
 */
angular.module('homepageNewApp')
  .controller('PortfolioCtrl', function ($scope) {

    $scope.test = 'test';

    //Set background images
    $('html').removeClass();
    $('html').addClass('portfolio-bg');

  });
