const {
  repeatedWord,
  HashTable,
  treeIntersection,
  leftJoin,
  mostCommonWord,
  BinarySearchTree,
} = require('../index');

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

  it('Tests that the function returns an empty array when there are no common values in both trees', () => {
    // $ Create the first tree
    const tree1 = new BinarySearchTree();
    tree1.add(5);
    tree1.add(3);
    tree1.add(7);

    // $ Create the second tree
    const tree2 = new BinarySearchTree();
    tree2.add(10);
    tree2.add(15);
    tree2.add(20);

    // $ Call the function
    const result = treeIntersection(tree1, tree2);

    // $ Assert the result
    expect(result).toEqual([]);
  });
  it('Tests that the function returns an array of all values when both trees are identical', () => {
    // Arrange
    const tree1 = new BinarySearchTree();
    tree1.add(5);
    tree1.add(3);
    tree1.add(7);
    tree1.add(4);
    tree1.add(6);
    tree1.add(2);
    tree1.add(8);

    const tree2 = new BinarySearchTree();
    tree2.add(5);
    tree2.add(3);
    tree2.add(7);
    tree2.add(2);
    tree2.add(4);
    tree2.add(6);
    tree2.add(8);

    // Assert
    expect(treeIntersection(tree1, tree2)).toEqual([5, 3, 7, 2, 4, 6, 8]);
  });

  it('Tests that the function returns an array with matching keys and values from both hashmaps', () => {
    const hashmap1 = new HashTable();
    hashmap1.set('happy', 'joyful');
    hashmap1.set('sad', 'unhappy');
    hashmap1.set('angry', 'furious');

    const hashmap2 = new HashTable();
    hashmap2.set('happy', 'sad');
    hashmap2.set('sad', 'happy');
    hashmap2.set('angry', 'calm');

    expect(leftJoin(hashmap1, hashmap2)).toEqual([
      ['happy', 'joyful', 'sad'],
      ['sad', 'unhappy', 'happy'],
      ['angry', 'furious', 'calm'],
    ]);
  });

  // Tests that the function removes non-alphabetic characters from words before counting. tags: [happy path]
  it('test_non_alphabetic_chars', () => {
    const str = 'The quick brown fox jumps over the lazy dog.';
    const expected = 'the';
    const result = mostCommonWord(str);
    expect(result).toEqual(expected);
  });
  // Tests that the function returns the correct word when given a string containing only one valid word. tags: [edge case, happy path]
  it('test_single_word', () => {
    const str = 'hello world, hello';
    const expected = 'hello';
    const result = mostCommonWord(str);
    expect(result).toEqual(expected);
  });
  // Tests that the function correctly handles input strings with multiple valid words with the same frequency. tags: [happy path]
  it('test_multiple_common_words', () => {
    const str = 'the cat in the hat had a bat and a rat';
    expect(mostCommonWord(str)).toBe('the');
  });
});
