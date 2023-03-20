'use strict';

const { insertionSort } = require('../index');

describe('insertionSort', () => {
  test('works', () => {
    expect(true).toBeTruthy();
  });

  test('should sort an array of numbers', () => {
    const arr = [2, 1, 9, 76, 4];
    const sortedArr = [1, 2, 4, 9, 76];

    expect(insertionSort(arr)).toEqual(sortedArr);
  });

  test('should sort an array of letters', () => {
    const arr = ['c', 'a', 'z', 'b'];
    const sortedArr = ['a', 'b', 'c', 'z'];

    expect(insertionSort(arr)).toEqual(sortedArr);
  });

  test('should sort an array of negative numbers', () => {
    const arr = [-2, -1, -9, -76, -4];
    const sortedArr = [-76, -9, -4, -2, -1];

    expect(insertionSort(arr)).toEqual(sortedArr);
  });

  test('should sort an array of positive and negative numbers', () => {
    const arr = [2, -1, 9, -76, 4];
    const sortedArr = [-76, -1, 2, 4, 9];

    expect(insertionSort(arr)).toEqual(sortedArr);
  });
});
