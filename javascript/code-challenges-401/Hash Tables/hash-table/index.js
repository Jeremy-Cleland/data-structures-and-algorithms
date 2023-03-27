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

  // $ if key does not exist in the hash table, return undefined
  get(key) {
    let idx = this.hash(key);
    if (this.keyMap[idx]) {
      for (const keyValuePair of this.keyMap[idx]) {
        if (keyValuePair[0] === key) {
          return keyValuePair[1];
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
      return the word
      return arr[i];
      // $ if the word is not in the hash table, add it
    } else {
      hashTable.set(arr[i], arr[i]);
    }
  }
  // $ if there are no repeated words, return null
  return null;
};

module.exports = { HashTable, repeatedWord };
