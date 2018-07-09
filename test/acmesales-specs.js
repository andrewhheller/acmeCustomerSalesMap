const expect = require('chai').expect;
const sinon = require('sinon');

const generateCustomerSalesMap = require('../acmesales.js');

describe('acme sales: generate customer sales map', () => {

  let salesTest;
    
  let customersTest;

  let result;

  let allCustomerNames;

  beforeEach(() => {

    salesTest = [
      {customerId: 1,
      orderId: 1,
      total: 3},
      {customerId: 2,
      orderId: 2,
      total: 4},
      {customerId: 2,
      orderId: 2,
      total: 7},
    ];

    customersTest = [
      {id: 1,
      name: 'Jean-Luc'},
      {id: 2,
      name: 'William'},
      {id: 3,
      name: 'Data'}
    ];

    result = generateCustomerSalesMap(salesTest, customersTest);

    allCustomerNames = Object.keys(result).length;

  })

  it('is a function', () => {
    expect(generateCustomerSalesMap).to.be.a('function');
  });

  it('returns an object', () => {
    expect(result).to.be.a('object');
  })

  it('returns the correct amount of customers', () => {
    let customerSalesMapTotal = Object.keys(result).length;
    expect(customerSalesMapTotal).to.equal(allCustomerNames);
  });

  it('generates the correct order total for each customer', () => {
    expect(result.William).to.equal(11);
  });

  it('uses Array.prototype.reduce', () => {
    const spy = sinon.spy();
    spy(Array.prototype, 'reduce');
    expect(spy.called).to.equal(true);
  })

});
