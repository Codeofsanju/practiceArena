'use strict';

/*
Fill in your own code where you see "your code here".
You can insert new lines at those locations, but you
will not need to edit the lines above and below them.
*/

// -----------------------------------------
// Stacks

class Stack {
  // Stack constructor function
  constructor (s = []) {
    this.arr = s;
    this.length = 0;
  }

  // Stack.prototype.add
  add (item) {
    this.length++;
    this.arr[this.length -1] = item;
    return this; // for chaining, do not edit
  }

  // Stack.prototype.remove
  remove () {
  if(this.length === 0){
    return undefined;
  }
  const hold = this.arr[this.length-1];
  this.length-=1;
  return hold;
  }

}

// -----------------------------------------
// Queues

// EXTRA CREDIT: remove the `pending` line in the spec to attempt.

class Queue {
  // Queue constructor function
  constructor () {
    this.arr = [];
    this.length = 0;
  }

  // Queue.prototype.add
  add (item) {
    this.length++;
    this.arr[this.length -1] = item;
    return this; // for chaining, do not edit
  }

  // Queue.prototype.remove
  remove () {
    if(this.length === 0){
      return undefined;
    }
    const holder = this.arr[0];
    for(let i = 0; i < this.length; i++){
      this.arr[i] = this.arr[i+1];
    }
    this.length--;
    return holder;
  }
}

// -----------------------------------------
// Linked lists

// EXTRA CREDIT: remove the `pending` line in the spec to attempt.

class LinkedList {
  // LinkedList constructor function
  constructor () {
    this.head = this.tail = null;
  }

  // LinkedList.prototype.addToTail
  addToTail (item) {
    const newNode = new ListNode(item);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    return this; // for chaining, do not edit
  }

  // LinkedList.prototype.removeFromTail
  removeFromTail () {
    //no nodes
    const holder = this.tail;
    if(!this.head){
      return undefined;
    }
    //single node case
    else if(this.head === this.tail){
      this.head = this.tail = null;
      return holder.item;
    }
    //multiple case
    this.tail = this.tail.prev;
    this.tail.next = null;
    return holder.item;
  }

  // LinkedList.prototype.forEach
  forEach (callbackFunc) {
    let curr = this.head;
    while(curr){
      callbackFunc(curr.item);
      curr = curr.next;
    }
  }
}

class ListNode {
  // ListNode constructor function
  constructor (item, prev, next) {
    this.item = item;
    this.next = next || null;
    this.prev = prev || null;
  }
}

//-----------------------------------------
// Association lists

class Alist {
  // Alist constructor function
  constructor () {
    this.head = null;
  }

  // Alist.prototype.set
  set (key, value) {
    let newNode = new AlistNode(key, value, this.head);
    this.head = newNode;
    return this; // for chaining; do not edit
  }

  // Alist.prototype.get
  get (key) {
    let curr = this.head;
    while(curr){
      if(curr.key === key){
        return curr.value;
      }
      curr = curr.next;
    }
  }
}

class AlistNode {
  // AlistNode constructor function
  constructor (key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

//-----------------------------------------
// Hash Tables

function hash (key) {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % 20;
}

class HashTable {
  // HashTable constructor function
  constructor () {
    this.buckets = Array(20);
    // your code here

    for(let i = 0; i< this.buckets.length; i++){
      this.buckets[i] = new Alist();
    }
  }

  // HashTable.prototype.set
  set (key, value) {
    // your code here. DO NOT simply set a prop. on an obj., that's cheating!
    this.buckets[hash(key)].set(key, value);
    return this; // for chaining, do not edit
  }

  // HashTable.prototype.get
  get (key) {
    // your code here. DO NOT simply get a prop. from an obj., that's cheating!
    return this.buckets[hash(key)].get(key);
  }
}

//-----------------------------------------
// Binary search trees

class BinarySearchTree {
  // BinarySearchTree constructor function
  constructor (val) {
    // your code here
    this.value = val;
    this.left = null;
    this.right = null;
  }

  // BinarySearchTree.prototype.insert
  insert (val) {
    // your code here
    if(val < this.value){
      !this.left ? this.left = new BinarySearchTree(val) : this.left.insert(val);
    }
    else{
      !this.right ? this.right = new BinarySearchTree(val) : this.right.insert(val);
    }
    return this; // for chaining, do not edit
  }

  // BinarySearchTree.prototype.min
  min () {
    if(!this.left){
      return this.value;
    }
    return this.left.min();
  }

  // BinarySearchTree.prototype.max
  max () {
    if(!this.right){
      return this.value;
    }
    return this.right.max();
  }

  // BinarySearchTree.prototype.contains
  contains (val) {
    if(this.value === val){
      return true;
    }
    if(val < this.value){
      return !this.left ? false : this.left.contains(val);
    }
      return !this.right ? false : this.right.contains(val);
  }

  // BinarySearchTree.prototype.traverse
  traverse (callbackFunc) {
    if(this.left) this.left.traverse(callbackFunc);
    callbackFunc.call(null, this.value);
    if(this.right)this.right.traverse(callbackFunc);
  }
}
