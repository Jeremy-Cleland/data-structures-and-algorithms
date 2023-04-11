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

const sum = (node) => {
  // base case if node is null return 0
  if (node === null) return 0;
  // return the sum of the left subtree, the value of the node and the sum of the right subtree
  return sum(node.left) + node.value + sum(node.right);
};

const isSumTree = (node) => {
  // define leftSum and rightSum
  let leftSum, rightSum;
  // base case if node is null or node has no children
  if (node === null || (node.left === null && node.right === null)) return true;

  // get the sum of left and right subtree
  leftSum = sum(node.left);
  // get the sum of left and right subtree
  rightSum = sum(node.right);

  // if the node and both of its children satisfy the property return 1 else 0
  if (
    node.value === leftSum + rightSum &&
    // recursively check for every node
    isSumTree(node.left) &&
    // recursively check for every node
    isSumTree(node.right)
  )
    return true;

  return false;
};

module.exports = {
  BinarySearchTree,
  BinaryTree,
  Node,
};
