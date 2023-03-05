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

  test('should be able to pop off a node from the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);

    let poppedNode = stack.pop();
    expect(poppedNode).toEqual(3);
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
    expect(stack.top.next.next).toBeNull();
  });

  test('should be able to pop off the whole stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);

    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.top).toBeNull();
  });

  test('should be able to peek into a stack', () => {
    const stack = new Stack();
    stack.push(1);
    let peekedNode = stack.peek();
    expect(peekedNode).toEqual(1);
  });
});

test('should return false is stack is empp into a stack', () => {
  const stack = new Stack();
  let peekedNode = stack.peek();
  expect(peekedNode).toBeFalsy();
});

test('should return false is stack is empp into a stack', () => {
  const stack = new Stack();
  stack.push(1);
  let peekedNode = stack.peek();
  expect(peekedNode).toEqual(1);
});

describe('Queue', () => {
  test('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();

    expect(queue).toBeTruthy();
  });

  test('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.first.value).toEqual(1);
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    let dqNode = queue.dequeue();
    expect(dqNode).toEqual(1);

    expect(queue.first.value).toEqual(2);
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    let peekedNode = queue.peek();
    expect(peekedNode.value).toEqual(1);
    expect(queue.first.value).toEqual(1);
  });
  test('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.first).toBeNull();
  });

  test('Calling dequeue or peek on empty queue raises exception', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.first).toBeNull();
  });
});
