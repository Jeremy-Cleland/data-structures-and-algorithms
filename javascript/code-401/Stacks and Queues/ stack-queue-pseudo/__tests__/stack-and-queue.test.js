'use strict';

// Require our linked list implementation
const { Stack, Queue } = require('../index');

describe('Stack', () => {
  test('works', () => {
    const stack = new Stack();
    expect(stack).toBeTruthy();
  });

  test('should be able to push a node into a stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
    expect(stack.top.next.next.next).toBeNull();
  });
});
