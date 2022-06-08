const {
  myNumbers,
  doubleOddNumbers
} = require(`../homework/map-filter.js`);

describe('map_filter', () => {
  test('result -> [2, 6]', () => {
    const result = doubleOddNumbers(myNumbers);
    expect(result).toEqual([2, 6]);
  });
});