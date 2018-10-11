function recursiveMap (arr, callBack){
    if(arr.length === 0){
        return [];
    }
    if(Array.isArray(arr[0])){
        return recursiveMap(arr[0], callBack).concat(recursiveMap(arr.slice(1), callBack));
    }
     return [callBack(arr[0])].concat(recursiveMap(arr.slice(1), callBack));
}