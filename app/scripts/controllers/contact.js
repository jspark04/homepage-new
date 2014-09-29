'use strict';

/**
 * @ngdoc function
 * @name homepageNewApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the homepageNewApp
 */
angular.module('homepageNewApp')
  .controller('ContactCtrl', function ($scope) {

    $scope.test = 'test';

    /*
    $('.background').backstretch('images/bw_back_medium.jpg', {
      centeredY: false
    });
    */

    //Set background images
    $('html').removeClass();
    $('html').addClass('contact-bg');



    //Contact form JS
    //Hide alert messages at first
    $('#ajaxError').hide();
    $('#ajaxSuccess').hide();

    //Submit functionality for the contact form
    $('#contactForm').submit(function(event) {
      //Hide alert messages at first
      $('#ajaxError').hide();
      $('#ajaxSuccess').hide();

      //Change appearance of button to show that it is submitting
      $('#submitButton').html('Submitting...');

      //Initiate mail actions
      //All good, send mail using AJAX
      var contactForm = $('#contactForm');
      console.dir(contactForm.serialize());

      function submitSuccess () {
        $('#submitButton').fadeOut();
        $('#ajaxSuccess').fadeIn();
      }

      function submitFail () {
        $('#submitButton').html('Re-submit');
        $('#ajaxError').fadeIn();
      }

      $.ajax({
        url: contactForm.attr('action') + '?ajax=true',
        type: contactForm.attr('method'),
        data: contactForm.serialize(),
        success: function(data) {

          if (data === 'success') {
            submitSuccess();
          } else {
            submitFail();
          }

        },
        error: function() {
          submitFail();
        }
      });


      //Prevent button from undergoing default action
      //Will prevent on most browsers
      event.preventDefault();
      //Failsafe for others
      return false;
    });


  });
