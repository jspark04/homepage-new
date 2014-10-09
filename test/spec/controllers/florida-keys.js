'use strict';

describe('Controller: FloridaKeysCtrl', function () {

  // load the controller's module
  beforeEach(module('homepageNewApp'));

  var FloridaKeysCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FloridaKeysCtrl = $controller('FloridaKeysCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
