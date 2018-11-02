// Create a array based stack without using any array methods

class Stack{
    constructor(s = []){
        this.arr = s;
        this.length = this.calcOrigLength();
    }
    pop(){
        if(this.length === 0){
            throw 'stack is empty';
        }
        const hold = this.arr[this.length-1];
        this.length-=1;
        return hold;
    }
    push(n){
        this.length++;
        this.arr[this.length -1] = n;
    }
    clear(){
        this.arr = [];
        this.length = this.calcOrigLength();
    }
    calcOrigLength(){
        return this.arr.reduce((accum, n) =>{
            accum++;
            return accum;
        }, 0);
    }
}

// Testing
const stack = new Stack([1,2,4,2,3]);
console.log(`Orginial Stack = [1,2,4,2,3]`);
console.log(`Original Length = ${stack.length}`);
stack.push(3);
stack.push(7);
console.log(`Length after 2 push calls (3, 7) = ${stack.length}`);
console.log(`pop call: ${stack.pop()}`);
console.log(`pop call: ${stack.pop()}`);
console.log(`Stack Length after: ${stack.length}`)
stack.clear();
console.log(`Length after call to clear(): ${stack.length}`)