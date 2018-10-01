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
    for(key in collection){
        if(collection.hasOwnProperty(key)){    
            if(collection[key] === element){
                return true;
            }
        }
    }
    return false;
}