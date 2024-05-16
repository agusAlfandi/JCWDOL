//* array implementation

const arr = [1, 2, 3, 4, 5, 6, { nama: "Jhon Doe" }, 7, [1, 2, 3]];
console.log(arr.flat());
const set = new Set(arr);

console.log(set);
// stack
class Stack {
  #maxSize;
  #container;

  constructor(maxSize = 10) {
    this.maxSize = maxSize;
  }

  #isFull() {}

  #isEmpty() {}

  push(element) {
    if (this.#isFull()) {
      console.log("stack overflow");
    }
  }
}

//queue
class Queue {
  #container = [];

  enqueue(element) {
    this.#container.push(elelemnt);
  }

  dequeue() {
    return this.#container;
  }

  getElements() {
    return this.#container;
  }
}

const quwue = new Queue();
// Queue.
