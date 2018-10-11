function rotater(str){
    let reverse = false; // kept here so we can keep record of this
    return function(num){
        if(num === str.length){
            reverse = !reverse;
        }
        if(!reverse){
            return `${str.slice(num)}${str.slice(0, num)}`
        }
        else if(reverse){
            return `${str.slice(str.length - num)}${str.slice(0,str.length - num)}`
        }
    }
}