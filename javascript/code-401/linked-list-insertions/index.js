'use strict';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    // Insert Node and reference to the next one
    const newNode = new LinkedListNode(value, this.head);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const prevHead = this.head;
      this.head = newNode;
      this.head.next = prevHead;
    }
    this.length++;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  insertBefore(value, newValue) {
    let current = this.head;
    if (current.value === value) {
      this.insert(newValue);
      return;
    }
    while (current.next) {
      if (current.next.value === value) {
        let prevNext = current.next;
        current.next = new LinkedListNode(newValue, prevNext);
        this.length++;
        return this.length;
      } else {
        current = current.next;
      }
    }
  }
  insertAfter(value, newValue) {
    let current = this.head;
    if (this.tail.value === value) {
      this.append(newValue);
      return;
    }
    while (current) {
      if (current.value === value) {
        const newNode = new LinkedListNode(newValue);
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return;
      }
      current = current.next;
    }
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
  toString() {
    let current = this.head;
    let text = '';

    while (current) {
      text += `[ ${current.value} ] -> `;

      current = current.next;
    }

    return text + 'NULL';
  }
  kthFromEnd(value) {
    if (value < 0) {
      return 'Exception';
    }

    let tempNum = this.length - 1 - value;
    let current = this.head;

    if (tempNum === 0) {
      return current.value;
    }

    if (tempNum < 0) {
      return 'Exception';
    }

    for (let i = 0; i < tempNum; i++) {
      current = current.next;
    }

    return current.value;
  }
}

const zipLists = (ll1, ll2) => {
  let current1 = ll1.head;
  let current2 = ll2.head;
  const ll3 = new LinkedList();
  while (current1 || current2) {
    if (current1) {
      ll3.append(current1.value);
      current1 = current1.next;
    }
    if (current2) {
      ll3.append(current2.value);
      current2 = current2.next;
    }
  }
  return list3;
};
class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = { LinkedList, zipLists };
