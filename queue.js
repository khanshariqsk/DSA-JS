class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  #first = null;
  #last = null;
  #length = 0;

  constructor(value) {
    if (value) {
      const newNode = new Node(value);
      this.#first = newNode;
      this.#last = newNode;
      this.#length = 1;
    }
  }

  get first() {
    return this.#first;
  }

  get last() {
    return this.#last;
  }

  get length() {
    return this.#length;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.#length === 0) {
      this.#first = newNode;
      this.#last = newNode;
    } else {
      this.#last.next = newNode;
      this.#last = newNode;
    }

    this.#length++;
    return this;
  }

  dequeue() {
    if (this.#length === 0) return undefined;
    let temp = this.#first;

    if (this.#length === 1) {
      this.#first = null;
      this.#last = null;
    } else {
      this.#first = this.#first.next;
      temp.next = null;
    }

    this.#length--;
    return temp;
  }
}

const queue = new Queue(4);
queue.enqueue(5).enqueue(6).enqueue(7);

const dequeued = queue.dequeue();
console.log({ dequeued });

console.log("First", queue.first);
console.log("Last", queue.last);
console.log("Length", queue.length);
