const chai = require('chai'),
      eco = require('../index'),
      should = chai.should();

describe('eco codes', () => {
    it('should lookup by eco code', () => {
        eco('1. g4').name.should.be.eql("Grob's Attack");
    });
});
