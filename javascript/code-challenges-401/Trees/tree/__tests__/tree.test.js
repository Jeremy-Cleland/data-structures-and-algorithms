'use strict';
const { BinarySearchTree, BinaryTree, Node } = require('../index');

describe('Tree', () => {
  let tree = new BinaryTree();
  tree.root = new Node(10);
  tree.root.right = new Node(15);
  tree.root.left = new Node(17);
  it('can be created as expected', () => {
    expect(tree.root.value).toEqual(10);
    expect(tree.root.right.value).toEqual(15);
    expect(tree.root.right.left).toBeNull();
  });

  it('create a tree with a single root node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    expect(tree.root.value).toEqual(10);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });

  it('returns pre-order array as expected', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.right = new Node(15);
    tree.root.left = new Node(17);
    const results = tree.preOrder();
    expect(results).toEqual([10, 17, 15]);
  });

  it('returns in-order array as expected', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.right = new Node(15);
    tree.root.left = new Node(17);
    const results = tree.inOrder();
    expect(results).toEqual([17, 10, 15]);
  });

  it('returns post-order array as expected', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.right = new Node(15);
    tree.root.left = new Node(17);
    const results = tree.postOrder();
    expect(results).toEqual([17, 15, 10]);
  });
  it('add a left and right child to a BST', () => {
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(5);
    tree.add(7);
    tree.add(20);
    tree.add(33);
    const results = tree.preOrder();
    expect(results).toEqual([1, 5, 7, 20, 33]);
  });

  it('returns falls if tree doesn/t contain a given node value', () => {
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(5);
    tree.add(7);
    tree.add(20);
    tree.add(33);
    let notContain = tree.contains(10);
    expect(notContain).toBeFalsy();
    let contain = tree.contains(20);
    expect(contain).toBeTruthy();
  });
});
