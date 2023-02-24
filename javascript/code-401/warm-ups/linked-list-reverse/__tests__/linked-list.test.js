'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  test('create an empty linked list', () => {
    const ll = new LinkedList();

    expect(ll.head).toBeNull();
  });

  test('insertion of node into an empty linked list', () => {
    const ll = new LinkedList();
    ll.insert('Node 1');

    expect(ll.head.value).toEqual('Node 1');
    expect(ll.head.next).toBeNull();
  });

  test('insertion of node into populated list', () => {
    const ll = new LinkedList();
    ll.insert('Node 1');
    ll.insert('Node 2');

    expect(ll.head.value).toEqual('Node 2');
    expect(ll.head.next.value).toEqual('Node 1');
    expect(ll.head.next.next).toBeNull();
    expect(ll.length).toBe(2);
  });

  test('display a string properly ', () => {
    const ll = new LinkedList();
    ll.insert('Node 1');
    ll.insert('Node 2');

    const linkedToString = ll.toString();

    expect(linkedToString).toEqual('[ Node 2 ] -> [ Node 1 ] -> NULL');
  });

  test('ability to know if a given value is in linked list', () => {
    const ll = new LinkedList();
    ll.insert('Node 1');

    expect(ll.includes('Node 1')).toBe(true);
  });

  test('ability to know if a given value is not in linked list', () => {
    const ll = new LinkedList();
    ll.insert('Node 1');
    ll.insert('Node 2');

    expect(ll.includes('Node 3')).toBe(false);
  });
});
