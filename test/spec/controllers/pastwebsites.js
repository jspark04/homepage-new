'use strict';

describe('Controller: PastwebsitesCtrl', function () {

  // load the controller's module
  beforeEach(module('homepageNewApp'));

  var PastwebsitesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PastwebsitesCtrl = $controller('PastwebsitesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
