'use strict';

// Require our linked list implementation
const { LinkedList, zipLists, removeValue } = require('../index');

describe('Linked List', () => {
  test('works', () => {
    expect(true).toBeTruthy();
  });

  test('should insert at the beginning of empty Linked List', () => {
    const list = new LinkedList();
    list.insert(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  });

  test('should insert at the beginning of populated', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);

    expect(list.head.value).toEqual(2);
    expect(list.head.next.value).toEqual(1);
    expect(list.head.next.next).toBeNull();
  });

  test('should display as a string', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);

    const linkedString = list.toString();

    expect(linkedString).toEqual('[ 2 ] -> [ 1 ] -> NULL');
  });

  test('should indicate whether a given value exists', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);

    expect(list.includes(1)).toBeTruthy();
    expect(list.includes(2)).toBeTruthy();
    expect(list.includes(9)).toBeFalsy();
  });

  test('should add a node/nodes to the end of the list', () => {
    const list = new LinkedList();
    list.insert(1);
    list.append(2);
    list.append(3);
    list.append(4);

    expect(list.tail.value).toEqual(4);

    const linkedString = list.toString();
    expect(linkedString).toEqual('[ 1 ] -> [ 2 ] -> [ 3 ] -> [ 4 ] -> NULL');
  });

  test('should insert a node before a node in the middle of the list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertBefore(4, 'insertBefore');

    const linkedString = list.toString();
    expect(linkedString).toEqual(
      '[ 1 ] -> [ 2 ] -> [ 3 ] -> [ insertBefore ] -> [ 4 ] -> NULL'
    );
  });

  test('should insert a node after a node in the middle of the list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertAfter(3, 'insertAfter');

    const linkedString = list.toString();
    expect(linkedString).toEqual(
      '[ 1 ] -> [ 2 ] -> [ 3 ] -> [ insertAfter ] -> [ 4 ] -> NULL'
    );
  });

  test('Should return the value of the node kth away from the end of the list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    expect(list.kthFromEnd(7)).toEqual('Exception');
    expect(list.kthFromEnd(6)).toEqual('Exception');
    expect(list.kthFromEnd(3)).toEqual(1);
    expect(list.kthFromEnd(2)).toEqual(2);
    expect(list.kthFromEnd(1)).toEqual(3);
    expect(list.kthFromEnd(0)).toEqual(4);
  });

  test('should zip 2 existing linked lists', () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();

    ll1.append('1a');
    ll1.append('2a');
    ll1.append('3a');
    ll2.append('1b');
    ll2.append('2b');
    ll2.append('3b');

    const ll3 = zipLists(ll1, ll2);

    expect(ll3.head.value).toEqual('1a');
    expect(ll3.head.next.value).toEqual('1b');
    expect(ll3.head.next.next.value).toEqual('2a');
    expect(ll3.head.next.next.next.value).toEqual('2b');
    expect(ll3.head.next.next.next.next.value).toEqual('3a');
    expect(ll3.head.next.next.next.next.next.value).toEqual('3b');
  });

  test('should remove value from given list', () => {
    const ll1 = new LinkedList();

    ll1.insert('6');
    ll1.insert('5');
    ll1.insert('4');
    ll1.insert('3');
    ll1.insert('2');
    ll1.insert('1');
    removeValue(ll1, '4');

    expect(ll1.head.value).toEqual('1');
    expect(ll1.head.next.value).toEqual('2');
    expect(ll1.head.next.next.value).toEqual('3');
    expect(ll1.head.next.next.next.value).toEqual('5');
    expect(ll1.head.next.next.next.next.value).toEqual('6');
  });
});
