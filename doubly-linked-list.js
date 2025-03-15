class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.#tail;
      this.#tail = newNode;
    }

    this.#length++;
    return this;
  }

  pop() {
    if (this.#length === 0) return undefined;
    let temp = this.#tail;

    if (this.#length === 1) {
      this.#head = null;
      this.#tail = null;
    } else {
      this.#tail = this.#tail.prev;
      this.#tail.next = null;
      temp.prev = null;
    }

    this.#length--;

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.#length === 0) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      newNode.next = this.#head;
      this.#head.prev = newNode;
      this.#head = newNode;
    }

    this.#length++;
    return this;
  }

  shift() {
    if (this.#length === 0) return undefined;
    let temp = this.#head;

    if (this.#length === 1) {
      this.#head = null;
      this.#tail = null;
    } else {
      this.#head = this.#head.next;
      this.#head.prev = null;
      temp.next = null;
    }

    this.#length--;
    return temp;
  }

  get(index = -1) {
    if (index < 0 || index >= this.#length) return undefined;
    let temp = this.#head;

    if (index < this.#length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.#tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
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
    let before = this.get(index - 1);
    let after = before.next;

    newNode.next = after;
    newNode.prev = before;

    before.next = newNode;
    after.prev = newNode;

    this.#length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.#length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.#length - 1) return this.pop();

    let temp = this.get(index);
    let before = temp.prev;
    let after = temp.next;

    before.next = after;
    after.prev = before;

    temp.next = null;
    temp.prev = null;

    this.#length--;
    return temp;
  }
}

const doublyLinkedList = new DoublyLinkedList(4);
doublyLinkedList.push(5).push(6);
doublyLinkedList.unshift(3);
const data = doublyLinkedList.remove(1);
console.log({ data });

console.log("Head", doublyLinkedList.head);
console.log("Tail", doublyLinkedList.tail);
console.log("Length", doublyLinkedList.length);
