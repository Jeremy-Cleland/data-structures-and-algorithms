'use strict';

// Require our linked list implementation
const { LinkedList, zipLists } = require('../index');

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
    list.append('apple');
    list.append('orange');
    list.append('kiwi');
    list.append('mango');
    list.append('pineapple');
    list.append('carrot');

    expect(list.kthFromEnd(7)).toEqual('Exception');
    expect(list.kthFromEnd(6)).toEqual('Exception');
    expect(list.kthFromEnd(5)).toEqual('apple');
    expect(list.kthFromEnd(4)).toEqual('orange');
    expect(list.kthFromEnd(3)).toEqual('kiwi');
    expect(list.kthFromEnd(2)).toEqual('mango');
    expect(list.kthFromEnd(1)).toEqual('pineapple');
    expect(list.kthFromEnd(0)).toEqual('carrot');
  });

  test('should zip 2 existing linked lists', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    list1.append('apple');
    list1.append('orange');
    list1.append('kiwi');
    list2.append('mango');
    list2.append('pineapple');
    list2.append('carrot');

    const list3 = zipLists(list1, list2);

    expect(list3.head.value).toEqual('apple');
    expect(list3.head.next.value).toEqual('mango');
    expect(list3.head.next.next.value).toEqual('orange');
    expect(list3.head.next.next.next.value).toEqual('pineapple');
    expect(list3.head.next.next.next.next.value).toEqual('kiwi');
    expect(list3.head.next.next.next.next.next.value).toEqual('carrot');
  });
});
