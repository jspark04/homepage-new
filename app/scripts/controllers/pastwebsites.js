'use strict';

/**
 * @ngdoc function
 * @name homepageNewApp.controller:PastwebsitesCtrl
 * @description
 * # PastwebsitesCtrl
 * Controller of the homepageNewApp
 */
angular.module('homepageNewApp')
  .controller('PastwebsitesCtrl', function ($scope) {
    $scope.test = 'test';

    $scope.websites = [
      {
        imageLocation: 'images/jimb.jpg',
        imageAlt: 'Flonomix Bootstrap',
        websiteHeading: 'Flonomix (Bootstrap version)',
        websiteDescription: 'Used stuff'
      }
    ];

    //Rebox lightbox
    $('#pixedesign1').rebox();


    //Set background images
    $('html').removeClass();
    $('html').addClass('portfolio-bg');
  });
