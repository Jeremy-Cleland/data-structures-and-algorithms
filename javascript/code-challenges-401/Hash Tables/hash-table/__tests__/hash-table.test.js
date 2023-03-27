const HashTable = require('../index');

describe('Hash Table', () => {
  test('create an empty hash table', () => {
    const ht = new HashTable();

    expect(ht.size).toEqual(61);
  });

  it('Tests that adding a key-value pair to the hash table works correctly', () => {
    const hashTable = new HashTable();
    hashTable._set('key1', 'value1');
    expect(hashTable._get('key1')).toEqual(['key1', 'value1']);
  });

  it('Tests that the `_set()` method adds a key-value pair to the hash table and updates the value if the key already exists', () => {
    const hashTable = new HashTable();
    hashTable._set('key1', 'value1');
    hashTable._set('key2', 'value2');
    hashTable._set('key1', 'updatedValue');
    expect(hashTable._get('key1')).toEqual(['key1', 'updatedValue']);
  });

  it('Tests that the `_get()` method retrieves the value associated with a given key and returns null if the key does not exist', () => {
    const hashTable = new HashTable();
    hashTable._set('key1', 'value1');
    hashTable._set('key2', 'value2');
    expect(hashTable._get('key1')).toEqual(['key1', 'value1']);
    expect(hashTable._get('nonexistentKey')).toBe(null);
  });
  it('Tests that the `_keys()` method returns an array of unique keys in the hash table, even if they are stored in different sub-arrays of the keymap array', () => {
    const hashTable = new HashTable();
    hashTable._set('key1', 'value1');
    hashTable._set('key2', 'value2');
    hashTable._set('key3', 'value3');
    hashTable._set('key4', 'value4');
    expect(hashTable._keys()).toEqual(['key1', 'key2', 'key3', 'key4']);
  });

  it('Tests that getting the number of key-value pairs in the hash table works correctly', () => {
    const hashTable = new HashTable();
    hashTable._set('key1', 'value1');
    hashTable._set('key2', 'value2');
    hashTable._set('key3', 'value3');
    expect(hashTable._keys().length).toBe(3);
  });

  it('Tests that the `_has()` method returns true if key present', () => {
    const hashTable = new HashTable();
    hashTable._set('key1', 'value1');
    hashTable._set('key2', 'value2');
    expect(hashTable._has('key1')).toBe(true);
    expect(hashTable._has('key3')).toBe(null);
  });

  it('Constructor size paramater not passed verifies that the default size is used', () => {
    const hashTable = new HashTable();
    expect(hashTable.size).toEqual(61);
  });

  it('Tests that the hash table handles collisions correctly', () => {
    const hashTable = new HashTable(2);
    hashTable._set('key1', 'value1');
    hashTable._set('key2', 'value2');
    hashTable._set('key3', 'value3');
    expect(hashTable._get('key1')).toEqual(['key1', 'value1']);
    expect(hashTable._get('key2')).toEqual(['key2', 'value2']);
    expect(hashTable._get('key3')).toEqual(['key3', 'value3']);
  });

  // Successfully hash a key to an in-range value

  it('Successfully hash a key to an in-range value', () => {
    const hashTable = new HashTable();
    expect(hashTable._hash('key1')).toBeLessThanOrEqual(61);
  });
});
