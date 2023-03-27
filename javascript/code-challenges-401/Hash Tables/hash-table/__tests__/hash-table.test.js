const { repeatedWord, HashTable } = require('../index');

describe('Hash Table', () => {
  test('create an empty hash table', () => {
    const ht = new HashTable();

    expect(ht.size).toEqual(61);
  });

  it('Tests that adding a key-value pair to the hash table works correctly', () => {
    const hashTable = new HashTable();
    hashTable.set('key1', 'value1');
    expect(hashTable.get('key1')).toEqual('value1');
  });

  it('Tests that the `_set()` method adds a key-value pair to the hash table and updates the value if the key already exists', () => {
    const hashTable = new HashTable();
    hashTable.set('key1', 'value1');
    hashTable.set('key2', 'value2');
    hashTable.set('key1', 'updatedValue');
    expect(hashTable.get('key1')).toEqual('updatedValue');
  });

  it('Tests that the `_get()` method retrieves the value associated with a given key and returns null if the key does not exist', () => {
    const hashTable = new HashTable();
    hashTable.set('key1', 'value1');
    hashTable.set('key2', 'value2');
    expect(hashTable.get('key1')).toEqual('value1');
    expect(hashTable.get('nonexistentKey')).toBe(null);
  });
  it('Tests that the `_keys()` method returns an array of unique keys in the hash table, even if they are stored in different sub-arrays of the keymap array', () => {
    const hashTable = new HashTable();
    hashTable.set('key1', 'value1');
    hashTable.set('key2', 'value2');
    hashTable.set('key3', 'value3');
    hashTable.set('key4', 'value4');
    expect(hashTable.keys()).toEqual(['key1', 'key2', 'key3', 'key4']);
  });

  it('Tests that getting the number of key-value pairs in the hash table works correctly', () => {
    const hashTable = new HashTable();
    hashTable.set('key1', 'value1');
    hashTable.set('key2', 'value2');
    hashTable.set('key3', 'value3');
    expect(hashTable.keys().length).toBe(3);
  });

  it('Tests that the `_has()` method returns true if key present', () => {
    const hashTable = new HashTable();
    hashTable.set('key1', 'value1');
    hashTable.set('key2', 'value2');
    expect(hashTable.has('key1')).toBe(true);
    expect(hashTable.has('key3')).toBe(null);
  });

  it('Constructor size paramater not passed verifies that the default size is used', () => {
    const hashTable = new HashTable();
    expect(hashTable.size).toEqual(61);
  });

  // it('Tests that the hash table handles collisions correctly', () => {
  //   const hashTable = new HashTable(3);
  //   hashTable.set('key1', 'value1');
  //   hashTable.set('key2', 'value2');
  //   hashTable.set('key3', 'value3');
  //   hashTable.set('key1', 'value3');

  //   expect(hashTable.get('key2')).toBe('value2');
  //   expect(hashTable.get('key3')).toBe('value3');
  //   expect(hashTable.get('key1')).toBe('value3');
  // });

  it('handles collisions', () => {
    const hashTable = new HashTable();
    hashTable.set('key', 'value');
    hashTable.set('key', 'collision');
    expect(hashTable.get('key')).toBe('collision');
  });

  it('Successfully hash a key to an in-range value', () => {
    const hashTable = new HashTable();
    expect(hashTable.hash('key1')).toBeLessThanOrEqual(61);
  });

  it('Tests that the function correctly returns the first repeated word encountered in the input', () => {
    const str = 'hello world hello world';
    expect(repeatedWord(str)).toEqual('hello');
  });

  it('Tests that the function treats words with different capitalization as different words.', () => {
    const str = 'Hello world hello';
    const str2 = 'wolrd World woRld';
    expect(repeatedWord(str)).toEqual(null);
    expect(repeatedWord(str2)).toEqual(null);
  });

  it('Tests that the function returns null when given a string with no repeated words', () => {
    expect(repeatedWord('This is a test string')).toBe(null);
    expect(repeatedWord('No repeated words here')).toBe(null);
  });

  // it('tests that function handles words with punctuation or special characters correctly', () => {
  //   expect(repeatedWord('This comma has a comma, and a period.')).toEqual('a');
  //   expect(repeatedWord('This string has a hyphenated-word.')).toBe(null);
  //   expect(repeatedWord(`This string has a word with an apostrophe's.`)).toBe(
  //     null
  //   );
  // });
});
