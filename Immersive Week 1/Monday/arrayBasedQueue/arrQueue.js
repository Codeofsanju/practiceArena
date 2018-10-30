// Create a array based queue without using any array methods

class Queue{
    constructor(q = []){
        this.arr = q;
        this.length = this.calcOrigLength();
    }
    dequeue(){
        if(this.length === 0){
            throw 'Queue is Empty';
        }
        const hold =this.arr[0];
        for(let i = 1; i < this.length; i++){
            this.arr[i-1] = this.arr[i];
        }
        this.length -= 1;
        return hold;
    }
    enqueue(n){
        this.arr[this.length-1] = n;
        this.length++;
    }
    peek(){
        return this.arr[0];
    }
    clear(){
        this.arr = [];
        this.length = this.calcOrigLength();
    }
    calcOrigLength(){
        return this.arr.reduce((accum, n) =>{
            accum++;
            return accum;
        }, 0)
    }
}


// Testing
const queue = new Queue([1,2,4,2,3]);
console.log(`Orginial Queue = [1,2,4,2,3]`);
console.log(`Original Length = ${queue.length}`);
queue.enqueue(3);
queue.enqueue(2);
console.log(`Length after 2 enqueue calls = ${queue.length}`);
console.log(`Peek: ${queue.peek()}`);
console.log(`dequeue call: ${queue.dequeue()}`);
console.log(`dequeue call: ${queue.dequeue()}`);
console.log(`Queue Length after: ${queue.length}`)
queue.clear();
console.log(`Length after call to clear(): ${queue.length}`)
