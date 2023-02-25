# Stack and a Queue Implementation
<!-- Short summary or background information -->

## What is a Queue

• Queues – Support retrieval in first in, first out (FIFO) order. This is surely the fairest way to control waiting times for services. You want the container holding jobs to be processed in FIFO order to minimize the maximum time spent waiting. Note that the average waiting time will be the same regardless of whether FIFO or LIFO is used. Many computing applications involve data items with infinite patience, which renders the question of maximum waiting time moot.

## Common terminology for a queue is

- **Enqueue** - Nodes or items that are added to the queue.

- **Dequeue** - Nodes or items that are removed from the queue. If called when the queue is empty an exception will be raised.

- **Front** - This is the front/first Node of the queue.

- **Rear** - This is the rear/last Node of the queue.

- **Peek** - When you peek you will view the value of the front Node in the queue. If called when the queue is empty an exception will be raised.

- **IsEmpty** - returns true when queue is empty otherwise returns false.

## Queue Visualization

![Alt text](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-10/resources/images/Queue.PNG)

## What is a Stack

A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.

A pushdown stack (or just a stack) is a collection that is based on the last-in-first-out (LIFO) policy. When you keep your mail in a pile on your desk, you are using a stack. You pile pieces of new mail on the top when they arrive and take each piece of mail from the top when you are ready to read it.

## Common terminology for a stack is

- **Push** - Nodes or items that are put into the stack are pushed

- **Pop** - Node- - s or items that are removed from the stack are popped. When you attempt to pop an empty stack an exception will be raised.

- **Top** - This is the top of the stack.

- **Peek** - When you peek you will view the value of the top Node in the stack. When you attempt to peek an empty stack an exception will be raised.

- **IsEmpty** - returns true when stack is empty otherwise returns false.

## Stack Visualization

![Alt text](https://miro.medium.com/v2/resize%3Afit%3A1400/format%3Awebp/1%2A-EyTW6ktTIS2oY2ysa8VsQ.png)

## Challenge
<!-- Description of the challenge -->

### Queue Methods

- Create a Queue class that has a front property. It creates an empty Queue when instantiated.
- This object should be aware of a default empty value assigned to front when the queue is created.
- The class should contain the following methods:

#### Enqueue

- Arguments: value
- adds a new node with that value to the back of the queue with an O(1) Time performance.

#### Dequeue

- Arguments: none
- Returns: the value from node from the front of the queue
- Removes the node from the front of the queue
- Should raise exception when called on empty queue

#### Peek

- Arguments: none
- Returns: Value of the node located at the front of the queue
- Should raise exception when called on empty stack

#### isEmpty

- Arguments: none
- Returns: Boolean indicating whether or not the queue is empty

### Stack Methods

#### push

- Arguments: value
- adds a new node with that value to the top of the stack with an O(1) Time performance.

#### pop

- Arguments: none
- Returns: the value from node from the top of the stack
- Removes the node from the top of the stack
- Should raise exception when called on empty stack

#### peek

- Arguments: none
Returns: Value of the node located at the top of the stack
- Should raise exception when called on empty stack

#### is empty

- Arguments: none
- Returns: Boolean indicating whether or not the stack is empty.

### Structure and Testing

![Stack&Queue.png](./img/Stack%26Queue.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
O(1) Stacks
O(1) Queues

## API
<!-- Description of each method publicly available to your Linked List -->
