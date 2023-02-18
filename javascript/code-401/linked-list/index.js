'use strict';

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(value) {
    // Insert Node and reference to the next one
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    this.length++;
  }

  toString() {
    let current = this.head;
    let text = '';

    while (current) {
      text += `[ ${current.value} ] -> `;

      current = current.next;
    }

    return text + 'NULL';
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}
class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
