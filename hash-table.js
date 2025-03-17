class HashTable {
  #dataMap = null;
  constructor(size = 7) {
    this.#dataMap = new Array(size);
  }

  get dataMap() {
    return this.#dataMap;
  }

  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.#dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this.#hash(key);
    if (!this.#dataMap[index]) this.#dataMap[index] = [];
    this.dataMap[index].push([key, value]);
  }

  get(key) {
    const index = this.#hash(key);
    if (!this.dataMap[index]) return undefined;

    for (let i = 0; i < this.#dataMap[index].length; i++) {
      if (this.#dataMap[index][i][0] === key) {
        return this.#dataMap[index][i][1];
      }
      return undefined;
    }
  }

  keys() {
    const allKeys = [];

    for (let i = 0; i < this.#dataMap.length; i++) {
      if (this.#dataMap[i]) {
        for (let j = 0; j < this.#dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }

    return allKeys;
  }
}

const hashTable = new HashTable();
hashTable.set("languages", 3);
hashTable.set("laptops", 4);
hashTable.set("shoes", 27);

const value = hashTable.get("shoes");
console.log({ value });

const keys = hashTable.keys();
console.log({ keys });

console.log("DataMap", hashTable.dataMap);
