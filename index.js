class Stack {
  #list = [];

  push(item) {
    this.#list.push(item);
  }

  pop() {
    const list = this.#list;
    return this.length ? list.pop() : null;
  }

  peek() {
    return this.#list.at(-1);
  }

  get size() {
    return this.#list.length;
  }
}

const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log(stack.pop()); // 'lizard'
console.log(stack.peek()); // 'goose'
console.log(stack.pop()); // 'goose'
stack.push('llama');
console.log(stack.pop()); // 'llama'
console.log(stack.peek()); // 'fox'
console.log(stack.pop()); // 'fox'
console.log(stack.pop()); // null

class Queue {
  #list = [];

  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    return this.#list.length ? this.#list.shift() : null;
  }

  hasNext() {
    return !!this.#list.length;
  }
}
