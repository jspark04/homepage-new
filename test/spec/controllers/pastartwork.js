'use strict';

describe('Controller: PastartworkCtrl', function () {

  // load the controller's module
  beforeEach(module('homepageNewApp'));

  var PastartworkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PastartworkCtrl = $controller('PastartworkCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
