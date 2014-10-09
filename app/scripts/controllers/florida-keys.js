'use strict';

/**
 * @ngdoc function
 * @name homepageNewApp.controller:FloridaKeysCtrl
 * @description
 * # FloridaKeysCtrl
 * Controller of the homepageNewApp
 */
angular.module('homepageNewApp')
  .controller('FloridaKeysCtrl', function ($scope) {
    $scope.test = 'test';

    //Rebox lightbox
    $('#gallery').justifiedGallery();
    $('.swipebox').swipebox();


    //Set background images
    $('html').removeClass();
    $('html').addClass('portfolio-bg');
  });
