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

function sumTheDigits(arr) {
    if(arr.length === 0){
        return 0;
    }
    return arr.pop() + sumTheDigits(arr);
}

// returns the total amount of vowels in a string (a,e,i,o,u are considered vowels, ignore y)
// calls itself recursively
function countTheVowels(str) {
    if(!str.length){
        return 0;
    }
    return 'aeiouAEIOU'.includes(str[0]) + countTheVowels(str.slice(1));
}

function recSmallestInt(arr) {
    if(arr.length === 1){
        return arr[0];
    }
    arr[0] < arr[arr.length -1] ? arr.pop() : arr.shift();
    return recSmallestInt(arr);
}

function fib(n) {
    return (n===0 || n===1) ? 1 : fib(n-1) + fib(n-2);
}

function stringify() {

}

// evenAndOdd takes an array of numbers and splits the numbers into a multi-dimentional
// array of even and odd numbers 
function evenAndOdd(arr, ans = [[],[]]) {
    arr[0] % 2 === 0 ? ans[0].push(arr[0]) : ans[1].push(arr[0]);
    arr.shift();
    return arr.length === 0 ? ans : evenAndOdd(arr, ans);
}


