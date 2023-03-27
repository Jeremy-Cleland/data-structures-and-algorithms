class HashTable {
  constructor(size = 61) {
    this.keyMap = new Array(size);
    this.size = size;
  }
  // $ if key does not exist in the hash table, add it

  _set(key, value) {
    let idx = this._hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    this.keyMap[idx].push([key, value]);

    // $  if key already exists in the hash table, update the value
    if (this._has(key)) {
      let idx = this._hash(key);
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        if (this.keyMap[idx][i][0] === key) {
          this.keyMap[idx][i][1] = value;
        }
      }
    }
  }
  // $ if key does not exist in the hash table, return undefined
  _get(key) {
    let idx = this._hash(key);
    if (this.keyMap[idx]) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        if (this.keyMap[idx][i][0] === key) {
          return this.keyMap[idx][i];
        }
      }
    }
    return null;
  }
  // $ if key does not exist in the hash table, return null otherwise return true
  _has(key) {
    let idx = this._hash(key);
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
  _keys() {
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
  _hash(key) {
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

module.exports = HashTable;
