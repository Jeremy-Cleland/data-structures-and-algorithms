'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// ***Binary Tree ***

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // root - left - right
  preOrder() {
    const results = [];
    // helper function
    let _traverse = (node) => {
      // base case
      results.push(node.value);
      // recursive case
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    // call the helper function
    _traverse(this.root);
    // return the results
    return results;
  }

  // left - root - right

  inOrder() {
    const results = [];
    //helper function
    let _traverse = (node) => {
      // base case
      if (node.left) _traverse(node.left);
      results.push(node.value);
      if (node.right) _traverse(node.right);
    };
    // call the helper function
    _traverse(this.root);
    // return the results
    return results;
  }

  // left - right - root

  postOrder() {
    const results = [];
    // helper function
    let _traverse = (node) => {
      // base case
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      results.push(node.value);
    };
    // call the helper function
    _traverse(this.root);
    // return the results
    return results;
  }

  // get max value in tree (not BST)
  max() {
    let max = this.root.value;
    let _traverse = (node) => {
      if (node.value > max) {
        max = node.value;
      }
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return max;
  }
}

// ***Binary Search Tree ***

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (current) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        if (current.left === null) return false;
        current = current.left;
      } else {
        if (current.right === null) return false;
        current = current.right;
      }
    }
    return false;
  }

  max() {
    let current = this.root;
    let max = current.value;
    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      if (current.right) {
        current = current.right;
      } else {
        return max;
      }
    }
  }

  breadthFirst() {
    let queue = [];
    let results = [];
    let node = this.root;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      results.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return results;
  }
}

module.exports = {
  BinarySearchTree,
  BinaryTree,
  Node,
};
