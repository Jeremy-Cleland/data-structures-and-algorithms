# Insertion Sort

## What is Insertion Sort?

Insertion sort gradually sorts by starting at the second element of the array and swaps if the next element is smaller. The left side which is sorted will grow as the algorithm continues.

## [Blog Post Link](https://jeremycleland.notion.site/Insertion-Sort-a64566564bd24b1c90b1dac45a1675ca)

---

## Insertion Sort Pseudocode

- Start by grabbing the second element in the array and loop through the array
- define a variable `j` and assign it to `i - 1`
- define a variable `currentVal` and assign it to `arr[i]`
- while `j` ≥ to 0 and `arr[j]` > then `currentVal`
- Continue to the next element. If it is in the incorrect order, iterate through the sorted portion (i.e., the left side) to place the element in the correct position.
- Repeat until all elements in the array are sorted

---

```jsx
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let currentVal = arr[i];
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
```

---

## Step Through insertionSort

```jsx

let arr = [8,4,23,42,16,15]

insertionSort(arr)
```

![Untitled](Insertion%20Sort%20a64566564bd24b1c90b1dac45a1675ca/Untitled.png)

## Testing with Jest

InsertionSort testing included the following tests.

- should sort an array of numbers
- should sort an array of letters
- should sort an array of letters
- should sort an array of negative numbers
- should sort an array of positive and negative numbers

```jsx
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
```
