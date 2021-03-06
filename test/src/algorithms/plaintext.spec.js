/*
 * Copyright (c) 2015 TechnologyAdvice
 */

import Plaintext from 'src/algorithms/plaintext';

const algo = new Plaintext();

describe('Plaintext Algorithm', () => {
  it('passes back the provided string on encrypt', () => {
    let foo = algo.encrypt(null, 'foo');
    should.exist(foo);
    foo.should.be.a.string;
    foo.should.equal('foo');
  });
  it('passes back the provided string on decrypt', () => {
    let foo = algo.decrypt(null, 'foo');
    should.exist(foo);
    foo.should.be.a.string;
    foo.should.equal('foo');
  });
});
