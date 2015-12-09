'use strict';

describe('Service: payrollfactory', function () {

  // load the service's module
  beforeEach(module('movieappApp'));

  // instantiate service
  var payrollfactory;
  beforeEach(inject(function (_payrollfactory_) {
    payrollfactory = _payrollfactory_;
  }));

  it('should do something', function () {
    expect(!!payrollfactory).toBe(true);
  });

});
