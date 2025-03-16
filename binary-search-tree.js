class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BTS {
  #root = null;
  constructor() {}

  get root() {
    return this.#root;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.#root === null) {
      this.#root = newNode;
      return this;
    }

    let temp = this.#root;

    while (true) {
      if (temp.value === newNode.value) return undefined;

      if (newNode.value > temp.value) {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }

        temp = temp.right;
      } else {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }

        temp = temp.left;
      }
    }
  }

  contains(value) {
    if (this.#root === null) return false;

    let temp = this.#root;

    while (temp) {
      if (value === temp.value) {
        return true;
      } else if (value > temp.value) {
        temp = temp.right;
      } else if (value < temp.value) {
        temp = temp.left;
      } else {
        return false;
      }
    }

    return false;
  }

  minimumValueNode(currentNode) {
    if (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}

const bts = new BTS();
bts.insert(45);
bts.insert(50);
bts.insert(40);
bts.insert(78);
bts.insert(47);
bts.insert(77);

console.log("Root", bts.root);

const isContain = bts.contains(78);
console.log({ isContain });

const minimumValueNode = bts.minimumValueNode(bts.root);
console.log({ minimumValueNode });
