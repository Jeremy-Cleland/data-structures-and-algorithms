'use strict';

/* Binary Search Tree!!
 *
 * Nodes that will go on the Binary Tree.
 * They consist of the data in them, the node to the left, the node
 * to the right, and the parent from which they came from.
 *
 * A binary tree is a data structure in which an element
 * has two successors(children). The left child is usually
 * smaller than the parent, and the right child is usually
 * bigger.
 */

// class Node
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

  min() {
    // define a variable to hold the min value
    let min = this.root.value;
    // define a helper function
    let _traverse = (node) => {
      // base case - if the node value is less than the min value
      if (node.value < min) {
        // set the min value to the node value
        min = node.value;
      }
      // recursive case - if the node has a left child
      if (node.left) _traverse(node.left);
      // recursive case - if the node has a right child
      if (node.right) _traverse(node.right);
    };
    // call the helper function
    _traverse(this.root);
    // return the min value
    return min;
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
}

module.exports = {
  BinarySearchTree,
  BinaryTree,
  Node,
};
