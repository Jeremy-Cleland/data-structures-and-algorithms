'use strict';

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(value) {
    // Insert Node and reference to the next one
    const newNode = new LinkedListNode(value, this.head);
    // Set the head to the new node
    this.head = newNode;
    // Increment the length
    this.length++;
  }

  // Returns the values of the nodes in the linked list as a string.
  toString() {
    // Set current to the head
    let current = this.head;
    // Set text to empty string
    let text = '';
    // While current is not null
    while (current) {
      // Add the value to the text
      text += `[ ${current.value} ] -> `;
      // Set current to the next node
      current = current.next;
    }
    // Add NULL to the end of the text
    return text + 'NULL';
  }

  // Returns true if the value is in the linked list
  includes(value) {
    // Set current to the head
    let current = this.head;
    // While current is not null
    while (current) {
      // If the current value is equal to the value
      if (current.value === value) {
        // Return true
        return true;
      }
      // Set current to the next node
      current = current.next;
    }
    // Return false
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
