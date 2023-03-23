const { merge, mergeSort } = require('../index');

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testArray2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

describe('merge', () => {
  it('should merge two sorted arrays', () => {
    expect(merge([1, 10, 50], [2, 14, 99, 100])).toEqual([
      1, 2, 10, 14, 50, 99, 100,
    ]);
  });
});

describe('mergeSort', () => {
  it('should sort an array', () => {
    expect(mergeSort(testArray)).toEqual(testArray);
    expect(mergeSort(testArray2)).toEqual(testArray);
  });
});
