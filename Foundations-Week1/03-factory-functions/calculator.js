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