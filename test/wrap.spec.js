const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns formatted string provided', () => {
    expect(wrap("1234567890", 5)).to.equal("12345/n67890");
  });

  it('Returns formatted string provided', () => {
    expect(wrap("The fox said hi", 10)).to.equal("The fox/nsaid hi");
  });
});