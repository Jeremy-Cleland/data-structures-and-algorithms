'use strict';

const LinkedList = require('../index');

describe('Linked List', () => {
  test('create an empty linked list', () => {
    const ll = new LinkedList();

    expect(ll.head).toBeNull();
  });

  test('It should insert at the head of empty list', () => {
    const ll = new LinkedList();
    ll.insert('Node 1');

    expect(ll.head.value).toEqual('Node 1');
    expect(ll.head.next).toBeNull();
  });

  test('append node to end of the linked list', () => {
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

  test('it should add a node before a node witha given value', () => {
    const ll = new LinkedList();
    ll.append('Node 1');
    ll.append('Node 2');
    ll.append('Node 3');
    ll.append('Node 4');
    ll.insertBefore('Node 2', 'insertBefore');

    expect(ll.tail.value).toEqual('Node 4');

    const llString = ll.toString();

    expect(llString).toEqual(
      '[ Node 1 ] -> [ insertBefore ] -> [ Node 2 ] -> [ Node 3 ] -> [ Node 4 ] -> NULL'
    );
  });

  test('it should add a node after a node with a given value', () => {
    const ll = new LinkedList();
    ll.append('Node 1');
    ll.append('Node 2');
    ll.append('Node 3');
    ll.append('Node 4');
    ll.insertAfter('Node 3', 'insertAfter');

    const llString = ll.toString();
    expect(llString).toEqual(
      '[ Node 1 ] -> [ Node 2 ] -> [ Node 3 ] -> [ insertAfter ] -> [ Node 4 ] -> NULL'
    );
  });
});
