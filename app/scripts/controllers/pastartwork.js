'use strict';

/**
 * @ngdoc function
 * @name homepageNewApp.controller:PastartworkCtrl
 * @description
 * # PastartworkCtrl
 * Controller of the homepageNewApp
 */
angular.module('homepageNewApp')
  .controller('PastartworkCtrl', function ($scope) {
    $scope.test = 'test';

    //Rebox lightbox
    $('#gallery').rebox({ selector: 'a' });


    //Set background images
    $('html').removeClass();
    $('html').addClass('portfolio-bg');
  });
