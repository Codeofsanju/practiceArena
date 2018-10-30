// YOUR CODE HERE
class BinarySearchTree{
    constructor(n){
        this.numNodes = 1;
        this.left = null;
        this.right = null;
        this.value = n;
        this.root = n;
    }

    insert(n){
    if(n < this.value){
        if (!this.left) {
            this.left = new BinarySearchTree(n);
        } else {
            this.left.insert(n);
        }
    }
    else{
        if (!this.right) {
            this.right = new BinarySearchTree(n);
        } else {
            this.right.insert(n);
        }
    }
    this.numNodes++
    }
    contains(n){
        if(this.value === n){
            return true;
        }
        if(n < this.value){
            return !this.left ? false : this.left.contains(n);
        }
        else{
            return !this.right ? false : this.right.contains(n);
        }
    }
    depthFirstForEach(func, order = 'in-order'){
      if (order === 'pre-order'){
        func.call(null, this.value);
        if(this.left) this.left.depthFirstForEach(func, order);
        if(this.right) this.right.depthFirstForEach(func, order);
      }
      if (order === 'post-order') {
        if(this.left) this.left.depthFirstForEach(func, order);
        if(this.right) this.right.depthFirstForEach(func, order);
        func.call(null, this.value);
      }
      else if (order === 'in-order') {
        if (this.left) this.left.depthFirstForEach(func, order);
        func.call(null, this.value);
        if (this.right) this.right.depthFirstForEach(func, order);
      }
    }
    breadthFirstForEach(func){
        const queue = [this]; // create a queue starting with root
        while(queue.length > 0){
            const curr = queue.shift(); // shift (dequeue) 
            func.call(null, curr.value); // call func on current 
            if(curr.left) queue.push(curr.left); // push left to queue
            if(curr.right)queue.push(curr.right); // push right to queue
        }
    }
    size(){
        return this.numNodes;
    }
}

