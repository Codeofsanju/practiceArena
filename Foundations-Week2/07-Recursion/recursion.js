// all of the recursive functions are pre-defined for you. Keep in mind, you need to determine
// their arguments! Read the test specs to see why these functions already defined as a function
// declaration.

function factorial(n) {
    if(n === 0){
        return 1;
    }
    return n * factorial(n - 1);
}

function factorialIterative(n){
    let ans = 1;
    for(let i = n; i > 0; i--){
         ans *= i;
    }
    return ans;
}


function countTheVowels(str) {
 
}

function recSmallestInt() {

}

function fib() {

}

function stringify() {

}



