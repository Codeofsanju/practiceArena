class MyEventEmitter{
    constructor(){
        this.events = {};
    }
    addListener(key, callBack){
        // if(this.events[key] === undefined){ // if the key does not exist in object
        //     this.events[key] 
        // }
        // else{ // if the key does, push to the array assigned to key
        //     this.events[key].push(callBack);
        // }
        this.events[key] === undefined ? this.events[key] = [callBack] : this.events[key].push(callBack);
    }
    emit(key){
        this.events[key].forEach(element => {
            element.apply(null, Array.from(arguments).slice(1)); // important to remember that apply takes a array of arguments. What we are interested in is everything after the first argument (first argument = key)
        });
    }
    //OR - using ...others to get name arguments 
    // emit(key, ...others){
    //     this.events[key].forEach(element => {
    //         element.apply(null, others); 
    //     });
    // }
}