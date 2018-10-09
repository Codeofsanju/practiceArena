const callAll = (obj, arr) =>{
    return arr.map(n => n.call(obj));
}

// What I was trying to do (incorrect) - error thrown "n is not a function"
// const callAll = (obj, arr) =>{
//     return arr.map(n => obj.n()); 
// }