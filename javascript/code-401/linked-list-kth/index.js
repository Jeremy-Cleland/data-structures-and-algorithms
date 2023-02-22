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

  insertBefore(value, newValue) {
    let current = this.head;
    if (current.value === value) {
      this.insert(newValue);
      return;
    }
    while (current.next) {
      if (current.next.value === value) {
        let oldNext = current.next;
        current.next = new Node(newValue, oldNext);
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
        const newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return;
      }
      current = current.next;
    }
  }

  toString() {
    let current = this.head;
    let str = '';
    while (current) {
      str += `[ ${current.value} ] -> `;
      current = current.next;
    }
    return (str += 'NULL');
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

const zipLists = (list1, list2) => {
  let current1 = list1.head;
  let current2 = list2.head;
  const list3 = new LinkedList();
  while (current1 || current2) {
    if (current1) {
      list3.append(current1.value);
      current1 = current1.next;
    }
    if (current2) {
      list3.append(current2.value);
      current2 = current2.next;
    }
  }
  return list3;
};

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = { LinkedList, zipLists };
