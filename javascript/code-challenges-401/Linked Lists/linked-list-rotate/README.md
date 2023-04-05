# Singly Linked List | linked-list-zip
<!-- Short summary or background information -->

A linked list is a linear collection of data elements in computer science, where the linear order of the data elements is not determined by their physical location in memory. Instead, every part relates to the one before it. It is a data structure made up of a collection of nodes that collectively represent a sequence. Each node in the most basic version consists only of data and a reference (or link) to the node after it in the sequence. Using this structure, parts can be added to or taken out of the sequence at any point with minimal effort. Further linkages are included in more complicated variations, enabling effective insertion or removal from arbitrary element references. The linear access time of linked lists is a disadvantage (and difficult to pipeline). It is impossible to implement faster access, like random access. Arrays are more local to the cache than linked lists.

![Linked Lists](./img/rotate.png)

## Challenge
<!-- Description of the challenge -->

- Given a singly linked list, The task is to rotate the linked list counter-clockwise by k nodes.

Input: linked list = 10->20->30->40->50->60, k = 4
Output: 50->60->10->20->30->40.
Explanation: k is smaller than the count of nodes in a linked list so (k+1 )th node i.e. 50 becomes the head node and 60’s next points to 10

Input: linked list = 30->40->50->60, k = 2
Output: 50->60->30->40.

### Node

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

### Linked List

- Create a Linked List class
  - Within your Linked List class, include a head property.
  - Upon instantiation, an empty Linked List should be created.

### Methods

- **rotate**
  - Arguments: Linked List and kth position
  - Returns:  New Linked List, roated cockwise by the kth position

### Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API
<!-- Description of each method publicly available to your Linked List -->
