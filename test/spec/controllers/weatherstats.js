'use strict';

describe('Controller: WeatherstatsCtrl', function () {

  // load the controller's module
  beforeEach(module('favelixApp'));

  var WeatherstatsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeatherstatsCtrl = $controller('WeatherstatsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WeatherstatsCtrl.awesomeThings.length).toBe(3);
  });
});
