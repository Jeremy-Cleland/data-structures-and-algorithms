'use strict';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
  }

  append(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  reverseLinkedList(head) {
    let node = head,
      previous,
      tmp;

    while (node) {
      tmp = node.next;

      // reverse the pointer to previous node
      node.next = previous;

      // walk down the linked list
      previous = node;
      node = tmp;
    }
    return previous;
  }
}
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

let list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

list.reverseLinkedList();

console.log(list.value);
