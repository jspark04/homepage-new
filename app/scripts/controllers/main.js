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

    $scope.test = 'asdasd';


    //Set background images
    $('html').removeClass();
    $('html').addClass('main-bg');

    /*
    $('.background').backstretch('images/bw_back_medium.jpg', {
      centeredY: false
    });*/


    $('#js-rotating').Morphext({
      // The [in] animation type. Refer to Animate.css for a list of available animations.
      animation: 'bounceIn',
      // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
      separator: ',',
      // The delay between the changing of each phrase in milliseconds.
      speed: 3000
    });

    $('.home-content').addClass('animated bounce');

  });
