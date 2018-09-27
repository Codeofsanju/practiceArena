function RPNCalculator () {
    this.arr = [];
}

RPNCalculator.prototype.push = function (n){
    this.arr.push(n);
}

RPNCalculator.prototype.plus = function (){
    if(this.arr.length === 0){
        throw 'rpnCalculatorInstance is empty';
    }
    this.arr.push(this.arr.pop() + this.arr.pop());
}

RPNCalculator.prototype.minus = function (){
    if(this.arr.length === 0){
        throw 'rpnCalculatorInstance is empty';
    }
    const second = this.arr.pop();
    const first = this.arr.pop();
    this.arr.push(first - second);
}

RPNCalculator.prototype.times = function (){
    if(this.arr.length === 0){
        throw 'rpnCalculatorInstance is empty';
    }
    this.arr.push(this.arr.pop() * this.arr.pop());
}

RPNCalculator.prototype.divide = function (){
    if(this.arr.length === 0){
        throw 'rpnCalculatorInstance is empty';
    }
    const second = this.arr.pop();
    const first = this.arr.pop();
    this.arr.push(first / second);
}

RPNCalculator.prototype.value = function (){
    if(this.arr.length === 0){
        throw 'rpnCalculatorInstance is empty';
    }
    return this.arr[this.arr.length - 1];
}

