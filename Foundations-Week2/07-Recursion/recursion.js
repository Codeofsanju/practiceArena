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



// evenAndOdd takes an array of numbers and splits the numbers into a multi-dimentional
// array of even and odd numbers 
function evenAndOdd(arr, ans = [[],[]]) {
    arr[arr.length -1] % 2 === 0 ? ans[0].push(arr[arr.length -1]) : ans[1].push(arr[arr.length-1]);
    return arr.length === 1 ? ans : evenAndOdd(arr.slice(0, arr.length-1), ans);
}
console.log(evenAndOdd([1,2,3,4,5,6,7]));

const type = val => {
     return Object.prototype.toString.call(val).slice(8, -1);
};

function stringify(anything){
    const typeOfIn = type(anything);
    if(typeOfIn !== 'Array' && typeOfIn !== 'Object'){
        return typeOfIn === 'String' ?  `"${anything}"` :`${anything}`;
    }
    if(typeOfIn === 'Array'){
        const ans = anything.map((n) => `${stringify(n)}`).join(',');
        return `[${ans}]`;
    }
    if(typeOfIn === 'Object'){
        const ans = [];
        for(let key in anything){
            console.log('key', key);
            ans.push((`"${key}":${stringify(anything[key])}`));
        }
        ans.join(',');
        return `{${ans}}`;
    } 
}
