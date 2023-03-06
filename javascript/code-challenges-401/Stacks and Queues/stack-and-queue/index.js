class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//$ *********************** Queue Implementation ***********************
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.first) {
      this.last.next = newNode;
    } else {
      this.first = newNode;
    }
    this.last = newNode;
  }

  dequeue() {
    let temp = null;
    if (this.first) {
      temp = this.first.value;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
    }
    return temp;
  }
  peek() {
    if (this.first) {
      return this.first;
    } else {
      return null;
    }
  }
  isEmpty() {
    return this.first === null;
  }
}

//$ *********************** Stack Implementation ***********************
class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (this.top) {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      return temp.value;
    } else {
      return null;
    }
  }
  peek() {
    if (this.top) {
      return this.top.value;
    } else {
      return null;
    }
  }
  isEmpty() {
    if (this.top) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  Stack,
  Queue,
};
