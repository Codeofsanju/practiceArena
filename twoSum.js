// some function that takes an sorted array and takes an target some

const input = [3,5,2,-4,8,22];
const sortedInput = [-4,2,3,5,8,22];
const target = 7;

console.log(`\nArray input: [${input}] \nTarget: ${target} \n\n`);



const twoSumBrute = (arr, num) => {
    let sums = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === num){
                sums.push([arr[i], arr[j]]);
            }
        }
    }
    return sums.length !== 0;
};
console.log('Brute O(n^2): ',twoSumBrute(input, target));

function twoSumHash(arr, num) {
    const sums = [];
    const hashTable  = {};
    
    arr.map(curr => {
        let numMinusCurr = num - curr;
        !hashTable[numMinusCurr.toString()] ? hashTable[curr.toString()] = curr : sums.push([curr, numMinusCurr]);
    });
    return sums.lenght !== 0;
}

console.log('Hashtable O(n) - best for unsorted array input: ',twoSumHash(input, target));

const twoSumRatcheting = (arr, sum) => {
    let left = 0;
    let right = arr.length-1;

    for(let i = 0; i < arr.length; i++){
        let currSum = arr[left]+arr[right];
        if((currSum === sum)){
            return true;
        }
        currSum > sum ? right-- : left++;
    }
    return false;
};

console.log('Racheting O(n) - best for sorted array input: ',twoSumRatcheting(sortedInput, 1000));
