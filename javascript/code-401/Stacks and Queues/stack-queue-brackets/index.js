class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//$ *********************** Queue Implementation ***********************
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      this.rear.next = newNode;
    } else {
      this.front = newNode;
    }
    this.rear = newNode;
  }

  dequeue() {
    let temp = null;
    if (this.front) {
      temp = this.front.value;
      if (this.front === this.rear) {
        this.rear = null;
      }
      this.front = this.front.next;
    }
    return temp;
  }
  peek() {
    if (this.front) {
      return this.front;
    } else {
      return null;
    }
  }
  isEmpty() {
    return this.front === null;
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

function validateBrackets(str) {
  let stack = new Stack();

  const opening = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const closing = {
    '}': true,
    ']': true,
    ')': true,
  };

  for (let char of str) {
    if (opening[char]) {
      stack.push(char);
    } else if (closing[char]) {
      if (opening[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return true;
}

// validateBrackets('{}');
module.exports = {
  Stack,
  Queue,
  validateBrackets,
};
