const chai = require('chai'),
      eco = require('../index'),
      should = chai.should();

describe('eco codes', () => {
    it('should lookup by eco code', () => {
        eco('rnbqkbnr/pppppppp/8/8/6P1/8/PPPPPP1P/RNBQKBNR b KQkq g3 0 1').name.should.be.eql("Grob's attack");
    });
    it('should return null in opening state', () => {
        should.not.exist(eco('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'));
    });
});
