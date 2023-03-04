# Binary Tree and BST Implementation

<!-- Short summary or background information -->
Challenge Setup & Execution

## Features

- ### Node

  - Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

- ### Binary Tree

  - Create a Binary Tree class
    - Define a method for each of the depth-first traversals:

    - pre-order
    - in order
    - post order

    - Each depth-first traversal method should return an array of values, ordered appropriately.

- ### Binary Search Tree

  - Create a Binary Search Tree class
    - This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:

- #### Methods:

      - Add
        - Arguments: value
        - Return: nothing
        - Adds a new node with that value in the correct location in the binary search tree.

      - Contains
        - Argument: value
        - Returns: boolean indicating whether or not the value is in the tree at least once.

## Testing

Write tests to prove the following functionality:

[x] Can successfully instantiate an empty tree

[x] Can successfully instantiate a tree with a single root node

[x] For a Binary Search Tree, can successfully add a left child and right child properly to a node

[x] Can successfully return a collection from a preorder traversal

[x] Can successfully return a collection from an inorder traversal

[x] Can successfully return a collection from a postorder traversal

[x] Returns true false for the contains method, given an existing or non-existing node value

## Queue Visualization

![code challenge 15](./img/tree.png)
