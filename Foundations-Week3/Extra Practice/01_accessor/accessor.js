//Returns a function that acts as a getter/setter for the given object
//Key concepts:
//1: Closure
//2: dot vs. bracket notation
const accessor = (obj) =>{
    return function (key, value = ''){
        if(value === ''){
            return obj[key];
        }
        else{
            obj[key] = value;
        }
    }
    
}

