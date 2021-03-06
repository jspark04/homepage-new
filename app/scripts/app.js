'use strict';

/**
 * @ngdoc overview
 * @name homepageNewApp
 * @description
 * # homepageNewApp
 *
 * Main module of the application.
 */
angular
  .module('homepageNewApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .when('/pastwebsites', {
        templateUrl: 'views/pastwebsites.html',
        controller: 'PastwebsitesCtrl'
      })
      .when('/pastartwork', {
        templateUrl: 'views/pastartwork.html',
        controller: 'PastartworkCtrl'
      })
      .when('/florida-keys', {
        templateUrl: 'views/florida-keys.html',
        controller: 'FloridaKeysCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
