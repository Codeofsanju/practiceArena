// Re-implement the Array.prototype.forEach method
const forEach = (arr, callBack) =>{
    for(let i = 0; i < arr.length; i++){
        callBack(arr[i]);
    }
}

//Re-implement the Array.prototype.map
const map = (arr, callBack) =>{
    const ans = [];
    for(let i = 0; i < arr.length; i++){
        ans.push(callBack(arr[i]));
    }
    return ans;
}
const doubler = (n) => n*2; 

//Re-implement the Array.prototype.filter method:
/* - filter takes an array and function as arguments
   - the function passed to filter returns true or false
   - filter iterates on all values in the array and runs
   the function argument on each value. if the function returns
   true the value is added to the new array filter creates.
   - filter returns an array that qualifies the condition tested
   in the function argument. 
   - The array filter returns can vary
   in length (unlike the map function that that returns an
   array with the same length as the original)
*/
const filter = (arr, callBack) =>{
    const ans = [];
    for(let i = 0; i < arr.length; i++){
        if(callBack(arr[i])){
            ans.push(arr[i]);
        }
    }
    return ans;
}



//Re-implement the Array.prototype.includes method:
// the includes determines whether an array includes a certain element, returning true or false as appropriate
const includes = (collection, element) =>{
    for(key in collection){ // dont use on arrays because order isn't guaranteed
        if(collection.hasOwnProperty(key)){    
            if(collection[key] === element){
                return true;
            }
        }
    }
    return false;
}


// countWord
const countWords = (startValue, sentence) =>{
    let count = startValue+1; // we add one here to account for the last word
    for(let i = 0; i < sentence.length; i++){
        if(sentence[i] === ' '){
            count++;
        }
    }
    return count;
    // or return startValue += sentence.splt(' ').length;
}



// use the reduce function inside a sum function that takes an array of integers

const reduce = (array, startingValue, combiningFunc) => {
    for (let i = 0; i < array.length; i++) {
        startingValue = combiningFunc(startingValue, array[i]);
    }
        return startingValue;
};
// use reduce inside a sum function that takes an array of integers:
const sum = (arr) => reduce(arr, 0, (n, m) => n+m);

// The function every
// `every` tests if every element in this array passes the condition in the function
// If all the values pass the condition, `every` returns `true`
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
const every = (arr, combingFunc) =>{
    const callBack = (x, y) => x && combingFunc(y);
    return reduce(arr, true, callBack);
 }

const any = (arr, combiningFunc)=>{
    return reduce(arr, false, (x,y) => x || combiningFunc(y));
}