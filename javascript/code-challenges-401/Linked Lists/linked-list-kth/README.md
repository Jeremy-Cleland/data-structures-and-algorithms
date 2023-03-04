# Singly Linked List | linked-list-kth
<!-- Short summary or background information -->

A linked list is a linear collection of data elements in computer science, where the linear order of the data elements is not determined by their physical location in memory. Instead, every part relates to the one before it. It is a data structure made up of a collection of nodes that collectively represent a sequence. Each node in the most basic version consists only of data and a reference (or link) to the node after it in the sequence. Using this structure, parts can be added to or taken out of the sequence at any point with minimal effort. Further linkages are included in more complicated variations, enabling effective insertion or removal from arbitrary element references. The linear access time of linked lists is a disadvantage (and difficult to pipeline). It is impossible to implement faster access, like random access. Arrays are more local to the cache than linked lists.

![Linked Lists](./img/linked-list-kth.png)

## Challenge
<!-- Description of the challenge -->

Return the node at the kth position from the end of a linked list

### Node

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

### Linked List

- Create a Linked List class
  - k-th value from the end of a linked list.

### Methods

- **kth from the end**
  - Argument: a number, k, as a parameter.
  - Returns: node’s value that is k places from the tail of the linked list.
  - You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

### Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

You have access to the Node class and all the properties on the Linked List class.

Unit Tests

Write tests for the following scenarios, and any other cases that help you ensure your code is working as expected.

- [x] Where k is greater than the length of the linked list
- [x] Where k and the length of the list are the same
- [x] Where k is not a positive integer
- [x] Where the linked list is of a size 1

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API
<!-- Description of each method publicly available to your Linked List -->
