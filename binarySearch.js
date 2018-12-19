// write a function that implements boinary searh for arrays 
// input is sorted array

const binarySearch = (arr, someVal) => {
    // dont have to sort
    let indexOfMid = Math.floor(arr.length/2);
    let mid = arr[indexOfMid]; 
    
    if(arr.length <= 1 && arr[0] !== someVal){
        return -1;
    }

    if(mid === someVal){
        return indexOfMid;
    }

    if(someVal > mid){
        const res = binarySearch(arr.slice(indexOfMid), someVal);
        return res === -1 ? -1 : indexOfMid+1+res;
    } else{
        binarySearch(arr.slice(0, indexOfMid), someVal);
    }

};



console.log('\n',binarySearch([1,2,3,6,7], 3));
console.log(('\n'), binarySearch([1,2,3,4,5,6,7,8], 7));
console.log(('\n'), binarySearch([1], 2));


