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
        }
    }
}
