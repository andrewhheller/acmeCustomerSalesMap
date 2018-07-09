const sales = [
  {customerId: 1,
  orderId: 1,
  total: 3},
  {customerId: 2,
  orderId: 2,
  total: 4},
  {customerId: 1,
  orderId: 2,
  total: 7},
];

const customers = [
  {id: 1,
  name: 'moe'},
  {id: 2,
  name: 'curly'},
  {id: 3,
  name: 'larry'}
];

function generateCustomerSalesMap(sales, customers) {

  const combinerTotalWrapper = (id) => {

    const combinerTotal = (acc, ele) => {
      if(ele.customerId === id) {
        acc += ele.total;
      }

      return acc;
    }

    return sales.reduce(combinerTotal, 0);
  }

  // combiner function for reduce
  const combinerCustomerSalesMap = (acc, ele) => {

    const customerId = ele.id;

    // create key/value in accumulator {}
    // {}[customer name] = sales[element index].total
    acc[ele.name] = combinerTotalWrapper(customerId);

    // return populated object
    return acc;
  }

  return customers.reduce(combinerCustomerSalesMap, {});
}
  
console.log(generateCustomerSalesMap(sales, customers));

module.exports = generateCustomerSalesMap;
