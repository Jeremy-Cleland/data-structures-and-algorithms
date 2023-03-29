const { BinarySearchTree } = require('../../Trees/tree');

class HashTable {
  constructor(size = 61) {
    this.keyMap = new Array(size);
    this.size = size;
  }
  // $ if key does not exist in the hash table, add it

  set(key, value) {
    let idx = this.hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }

    for (const keyValuePair of this.keyMap[idx]) {
      if (keyValuePair[0]) {
        keyValuePair[1] = value;
        return;
      }
    }

    this.keyMap[idx].push([key, value]);
  }

  // $  if key already exists in the hash table, update the value
  // if (this.has(key)) {
  //   let idx = this.hash(key);
  //   for (let i = 0; i < this.keyMap[idx].length; i++) {
  //     if (this.keyMap[idx][i][0] === key) {
  //       this.keyMap[idx][i][1] = value;
  //     }
  //   }
  // }

  // $ get the value of the key if key does not exist in the hash table, return undefined
  get(key) {
    let idx = this.hash(key);
    if (this.keyMap[idx]) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        if (this.keyMap[idx][i][0] === key) {
          return this.keyMap[idx][i][1];
        }
      }
    }
    return null;
  }

  // $ if key does not exist in the hash table, return null otherwise return true
  has(key) {
    let idx = this.hash(key);
    if (this.keyMap[idx]) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        if (this.keyMap[idx][i][0] === key) {
          return true;
        }
      }
    }
    return null;
  }
  // $ return all keys in the hash table as an array
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  // $ this is the hash function
  hash(key) {
    let hashTotal = 0;
    const prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      hashTotal = (hashTotal * prime + value) % this.size;
    }
    return hashTotal;
  }
}

// $ repeatedWord function
const repeatedWord = (str) => {
  // $ Create a hashtable
  let hashTable = new HashTable();
  // $ split the string into an array
  let arr = str.split(' ');
  // $ loop through the array
  for (let i = 0; i < arr.length; i++) {
    // $ if the word is already in the hash table
    if (hashTable.has(arr[i])) {
      // $ return the word
      return arr[i];
      // $ if the word is not in the hash table, add it
    } else {
      hashTable.set(arr[i], arr[i]);
    }
  }
  // $ if there are no repeated words, return null
  return null;
};

// Write a function called tree_intersection that takes two binary trees as parameters.
// Using your Hashmap implementation as a part of your algorithm, returna all the  sets of values found in both trees.
const treeIntersection = (tree1, tree2) => {
  // $ Create a hashtable
  let hashTable = new HashTable();
  // $ Create an array to store the values
  let arr = [];
  // $ Create a function to traverse the tree
  const traverse = (node) => {
    // $ if the node is not null
    if (node) {
      // $ if the node is not in the hash table
      if (!hashTable.has(node.value)) {
        // $ add the node to the hash table
        hashTable.set(node.value, node.value);
        // $ if the node is in the hash table
      } else {
        // $ add the node to the array
        arr.push(node.value);
      }
      // $ traverse the left side of the tree
      traverse(node.left);
      // $ traverse the right side of the tree
      traverse(node.right);
    }
  };
  // $ traverse the first tree
  traverse(tree1.root);
  // $ traverse the second tree
  traverse(tree2.root);
  // $ return the array
  return arr;
};
// write a function called Left Join thawt returns all rows from the left table, even if there are no matches in the right table. This means that if the ON clause matches 0 (zero) records in the right table; the join will still return a row in the result, but with NULL in each column from the right table.

// Arguments: two hash maps
// The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
// The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.

// Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

function leftJoin(hashmap1, hashmap2) {
  let arr = [];
  for (let key of hashmap1.keys()) {
    if (hashmap2.has(key)) {
      arr.push([key, hashmap1.get(key), hashmap2.get(key)]);
    } else {
      arr.push([key, hashmap1.get(key), null]);
    }
  }
  return arr;
}

module.exports = {
  HashTable,
  repeatedWord,
  treeIntersection,
  leftJoin,
  BinarySearchTree,
};
