
const repeat = (string, number) => {
    let ans = '';
    for(let i = 0; i < number; i++){
        ans += string;
    }
    return ans;
}

const sum = (arr = []) => {
    let ans = 0;
    let i = 0;
    while(i < arr.length){
        ans += arr[i];
        i++;
    }
    return ans;
}

const join = (arr = [], delim = '') =>{
    let ans = '';
    for(let i = 0; i < arr.length; i++){
        if(arr.length === 0){
            return ans = '';
        }
        else if(arr.length === 1){
            return ans += arr[i];
        }
        else if(i === arr.length - 1){
            ans+= arr[i];
        }
        else{
            ans += arr[i]+delim;
        }
    }
    console.log(ans);
    return ans;
}
