function createFunctions(num){
    var ans = [];
    var funcReturner = function(index){ // we need to return a function from this function
        return function(){
            return index; // This function still has access to index through closure
        }
    }
    for(var i = 0; i < num; i++){
        ans.push(funcReturner(i));
    }
    return ans;
}

