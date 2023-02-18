'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  test('create an empty linked list', () => {
    const testLinkedList = new LinkedList();

    expect(testLinkedList.head).toBeNull();
  });

  test('insertion of node into an empty linked list', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.insert('Node 1');

    expect(testLinkedList.head.value).toEqual('Node 1');
    expect(testLinkedList.head.next).toBeNull();
  });

  test('insertion of node into populated list', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.insert('Node 1');
    testLinkedList.insert('Node 2');

    expect(testLinkedList.head.value).toEqual('Node 2');
    expect(testLinkedList.head.next.value).toEqual('Node 1');
    expect(testLinkedList.head.next.next).toBeNull();
    expect(testLinkedList.length).toBe(2);
  });

  test('display a string properly ', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.insert('Node 1');
    testLinkedList.insert('Node 2');

    const linkedToString = testLinkedList.toString();

    expect(linkedToString).toEqual('[ Node 2 ] -> [ Node 1 ] -> NULL');
  });

  test('ability to know if a given value is in linked list', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.insert('Node 1');

    expect(testLinkedList.includes('Node 1')).toBe(true);
  });

  test('ability to know if a given value is not in linked list', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.insert('Node 1');
    testLinkedList.insert('Node 2');

    expect(testLinkedList.includes('Node 3')).toBe(false);
  });
});
