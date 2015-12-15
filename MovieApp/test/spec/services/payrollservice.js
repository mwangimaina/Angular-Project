'use strict';

describe('Service: payrollService', function () {

  // load the service's module
  beforeEach(module('movieappApp'));

  // instantiate service
  var payrollService;
  beforeEach(inject(function (_payrollService_) {
    payrollService = _payrollService_;
  }));

  it('should do something', function () {
    expect(!!payrollService).toBe(true);
  });

});
