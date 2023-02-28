class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//$ *********************** Queue Implementation ***********************
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      this.rear.next = newNode;
    } else {
      this.front = newNode;
    }
    this.rear = newNode;
  }

  dequeue() {
    let temp = null;
    if (this.front) {
      temp = this.front.value;
      if (this.front === this.rear) {
        this.rear = null;
      }
      this.front = this.front.next;
    }
    return temp;
  }
  peek() {
    if (this.front) {
      return this.front;
    } else {
      return null;
    }
  }
  isEmpty() {
    return this.front === null;
  }
}

//$ *********************** Stack Implementation ***********************
class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (this.top) {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      return temp.value;
    } else {
      return null;
    }
  }
  peek() {
    if (this.top) {
      return this.top.value;
    } else {
      return null;
    }
  }
  isEmpty() {
    if (this.top) {
      return true;
    } else {
      return false;
    }
  }
}

//$ *********************** Animal Class Implementation ***********************
class Animal {
  constructor(name, species, next = null) {
    this.name = name;
    this.species = species;
    this.next = next;
  }
}
//$ *********************** AnimalShelter Class Implementation ***********************
class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
  }

  enqueue(name, species) {
    let newAnimal = new Animal(name, species);
    if (species === 'cat') {
      if (!this.cats.front) {
        this.cats.front = newAnimal;
        this.cats.rear = newAnimal;
      } else {
        this.cats.rear.next = newAnimal;
        this.cats.rear = newAnimal;
      }
    }
    if (species === 'dog') {
      if (!this.dogs.front) {
        this.dogs.front = newAnimal;
        this.dogs.rear = newAnimal;
      } else {
        this.dogs.rear.next = newAnimal;
        this.dogs.rear = newAnimal;
      }
    }
  }

  dequeue(species) {
    if (species === 'cat') {
      if (!this.cats.front) {
        return null;
      }

      let temp = this.cats.front;
      this.cats.front = this.cats.front.next;
      temp.next = null;
      return temp;
    }

    if (species === 'dog') {
      if (!this.dogs.front) {
        return null;
      }

      let temp = this.dogs.front;
      this.dogs.front = this.dogs.front.next;
      temp.next = null;
      return temp;
    }
    return null;
  }
}
module.exports = {
  Stack,
  Queue,
  AnimalShelter,
  Animal,
};
