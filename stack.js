class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  #top = null;
  #length = 0;

  constructor(value) {
    if (value) {
      const newNode = new Node(value);
      this.#top = newNode;
      this.#length = 1;
    }
  }

  get top() {
    return this.#top;
  }

  get length() {
    return this.#length;
  }

  //Dont confuse with unshift method because in stacks you can only push on top stack (LIFO)
  push(value) {
    const newNode = new Node(value);
    if (this.#length === 0) {
      this.#top = newNode;
    } else {
      newNode.next = this.#top;
      this.#top = newNode;
    }

    this.#length++;
    return this;
  }

  pop() {
    if (this.#length === 0) return undefined;

    let temp = this.#top;
    this.#top = this.#top.next;
    temp.next = null;

    this.#length--;
    return temp;
  }
}

const stack = new Stack(4);
stack.push(5);
const popped = stack.pop();
console.log({ popped });

console.log("Top", stack.top);
console.log("Length", stack.length);
