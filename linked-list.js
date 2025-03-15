class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  #head = null;
  #tail = null;
  #length = 0;

  constructor(value) {
    if (value) {
      const newNode = new Node(value);
      this.#head = newNode;
      this.#tail = newNode;
      this.#length = 1;
    }
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  get length() {
    return this.#length;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }

    this.#length++;
    return this;
  }

  pop() {
    if (!this.#head) return undefined;
    let pre = this.#head;
    let temp = this.#head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.#tail = pre;
    this.#tail.next = null;
    this.#length--;

    if (this.#length === 0) {
      this.#head = null;
      this.#tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      newNode.next = this.#head;
      this.#head = newNode;
    }

    this.#length++;
    return this;
  }

  shift() {
    if (!this.#head) return undefined;

    let temp = this.#head;
    this.#head = temp.next;
    temp.next = null;
    this.#length--;

    if (this.#length === 0) {
      this.#tail = null;
    }

    return temp;
  }

  get(index = -1) {
    if (index < 0 || index >= this.#length) return undefined;

    let temp = this.#head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index, value) {
    const temp = this.get(index);
    if (!temp) return false;

    temp.value = value;

    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.#length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.#length) return !!this.push(value);

    const newNode = new Node(value);
    let temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.#length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.#length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.#length - 1) return this.pop();

    const before = this.get(index - 1);
    const temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.#length--;

    return temp;
  }

  reverse() {
    let temp = this.#head;
    this.#head = this.#tail;
    this.#tail = temp;

    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.#length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }

  toString() {
    let temp = this.#head;
    let result = "";

    while (temp) {
      result += temp.value + " -> ";
      temp = temp.next;
    }

    return result + "null";
  }

  forEach(callback) {
    let temp = this.#head;
    let index = 0;

    while (temp) {
      callback(temp.value, index, this);
      temp = temp.next;
      index++;
    }
  }

  toArray() {
    const result = [];
    let temp = this.#head;

    while (temp) {
      result.push(temp.value);
      temp = temp.next;
    }

    return result;
  }
}

const linkedList = new LinkedList(4);
linkedList.push(5).push(6).push(7).push(8);

console.log("Head", linkedList.head);
console.log("Tail", linkedList.tail);
console.log("Length", linkedList.length);
console.log("ToString", linkedList.toString());
console.log("ToArray", linkedList.toArray());

linkedList.forEach((value, index) => {
  console.log(`Index ${index}: ${value}`);
});
