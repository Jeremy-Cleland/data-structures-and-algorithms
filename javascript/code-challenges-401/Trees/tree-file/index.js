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
  // Comparing two different file directories, create a method that takes in 2 directory structures and compares both and determines whether or not they have the same number of individual files.

  // Input: 2 directory structures
  // Output: Boolean

  // Edge Cases: If one directory is empty, return false

  // Approach: Create a helper function that takes in a directory and returns the number of files in that directory. Then, compare the number of files in each directory and return true if they are equal, false if they are not.

  // Time Complexity: O(n)

  // Space Complexity: O(n)

  // Code:

  analazeDirectory(dir1, dir2) {
    const countFiles = (dir) => {
      let count = 0;
      for (let file of dir.files) {
        if (file.type === 'file') {
          count++;
        } else {
          count += countFiles(file);
        }
      }
      return count;
    };
    return countFiles(dir1) === countFiles(dir2);
  }
}
// test cases for compareDirectories

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
