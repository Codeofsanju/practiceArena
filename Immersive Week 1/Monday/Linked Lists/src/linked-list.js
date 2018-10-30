// YOUR CODE HERE

class Node {
  constructor(val) {
    this.next = null;
    this.previous = null;
    this.value = val;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToTail(val) {
    const node = new Node(val);
    //Empty
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }
    //Single
    if (this.head.next === null) {
      this.head.next = node;
      this.tail = node;
      this.tail.previous = this.head;
      return;
    }
    //Multiple
    const oldTail = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.tail.previous = oldTail;
    this.tail.next = null;
  }
  addToHead(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }
  }
  removeHead() {
    const oldHead = this.head;
    // console.log(this.head.value);
    // console.log(oldHead.value);
    if (!this.head) {
      return;
    }
    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return oldHead.value;
  }
  removeTail() {
    if (this.tail === null) {
      return;
    }
    if (this.tail === this.head) {
      const val = this.tail.value;
      this.head = null;
      this.tail = null;
      return val;
    }

    const oldTail = this.tail;
    let newTail = this.tail.previous;
    // console.log(`Old Tail = ${oldTail}`);
    // console.log(`New Tail = ${newTail}`);
    this.tail = newTail;
    if (this.tail !== null) {
      this.tail.next = null;
    }

    return oldTail.value;
  }
  search(val) {
  let node = this.head;
  //Function check.
    if (typeof val === 'function') {
      // console.log(`Original: ${val}`)
      // val = val.call(null);
      // console.log(`New: ${val}`)
      while (node) {
        if (val.call(null, node.value)) {
            return node.value;
        } 
        else {
          node = node.next;
        }
      }
    }
  // Empty.
  if (!node) {
    return;
  }
  // Single.
  while (node) {
    if (node.value === val) {
        return node.value;
    } 
    else {
      node = node.next;
    }
  }
  return null;
  }
}
