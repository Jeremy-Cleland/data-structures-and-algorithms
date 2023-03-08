'use strict';
const { BinarySearchTree, BinaryTree, Node } = require('../index');

describe('Tree', () => {
  let tree = new BinarySearchTree();
  tree.add(1);
  tree.add(3);
  it('can be created as expected', () => {
    expect(tree.root.value).toEqual(1);
  });

  it('create a tree with a single root node', () => {
    let tree = new BinarySearchTree();
    tree.add(1);
    expect(tree.root.value).toEqual(1);
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

  it('returns list of values in tree in the order they were encountered BST', () => {
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(5);
    tree.add(7);
    tree.add(20);
    tree.breadthFirst();
    expect(tree.breadthFirst()).toEqual([1, 5, 7, 20]);
  });
});
