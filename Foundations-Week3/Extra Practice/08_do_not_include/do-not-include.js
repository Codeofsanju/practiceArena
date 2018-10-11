Array.prototype.doNotInclude = function(arr){
    !Array.isArray(arr) ? arr = [arr] : arr;
    return this.filter((value, index) => {
        return !arr.includes(index) && value;
    })
}