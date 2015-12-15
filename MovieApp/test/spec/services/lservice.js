'use strict';

describe('Service: lservice', function () {

  // load the service's module
  beforeEach(module('movieappApp'));

  // instantiate service
  var lservice;
  beforeEach(inject(function (_lservice_) {
    lservice = _lservice_;
  }));

  it('should do something', function () {
    expect(!!lservice).toBe(true);
  });

});
