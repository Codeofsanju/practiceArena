const createCalculator = () => {
    return{
        curr: 0,
        value() {
            return this.curr;
        },
        add(n){
            this.curr += n;
        },
        subtract(n){
            this.curr -= n;
        },
        clear(){
            this.curr = 0;
        },
    }
}


const addSquareMethod = (arr) => {
    var newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        obj.square = () => {
            return obj.curr ** 2;
        }
        newArr[i] = obj;
    }
    return newArr;
    // var newArr = arr.map(obj =>{ // return the array that is returned by the map function
    //     obj.square = () =>{
    //         return obj.curr * obj.curr;
    //     };
    //     return obj;
    // })
    // return newArr;
}


const createHumanCalculatorInternalPrototype = {
    add(n){
        this.curr += n;
    },
    subtract(n){
       this.curr -= n;
    },
    value(){
        return this.curr;
    },
    clear(){
        this.curr = -10;
    }
}
const createHumanCalculator = () =>{
    const instance = Object.create(createHumanCalculatorInternalPrototype);
    instance.curr = -10;
    return instance;
}