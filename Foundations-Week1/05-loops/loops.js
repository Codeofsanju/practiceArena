
// CREATE REPEATING STRING WITH NUMBER OF REPEATS
const repeat = (string, number) => {
    let ans = '';
    for(let i = 0; i < number; i++){
        ans += string;
    }
    return ans;
}

// SUM ALL ARRAY NUMBERS
const sum = (arr = []) => {
    let ans = 0;
    let i = 0;
    while(i < arr.length){
        ans += arr[i];
        i++;
    }
    return ans;
}

// JOIN ARRAY TO STRING WITH AND WITHOUT DELIMITER
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
    return ans;
}

// GRID GENERATOR
const gridGenerator = (n) =>{
    let ans = '';
    if(n === 0){
        return ans;
    }
    for(let a = 0; a < n; a++){
        if (a > 0){
            ans+='\n';
        }
        for(let b = 0; b < n; b++){
            if(a%2 ===0){
                if(b%2 ===0){
                    ans+='#';
                }
                else{
                    ans+=' ';
                }
            }
            else if(a%2 !== 0){
                if(b%2 !== 0){
                    ans+='#';
                }
                else{
                    ans+=' ';
                }
            }
        }
    }
    console.log(ans);
    ans+='\n';
    return ans;
}
// a going down
// b going across

//LOOPING THROUGH OBJECTS (for in method)
function paramify(obj){
    let ans = [];
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            ans.push(`${key}=${obj[key]}`);
        }
    }
    return join(ans.sort(), '&');
}

//Objectkeys
const paramifyObjectKeys = (obj) =>{
    let ans = [];
    const keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++){
        ans.push( `${keys[i]}=${obj[keys[i]]}`)
    }
    return join(ans.sort(), '&');
}

//SORT
const sort = (n)=>{
    for(let i = 0; i < n.length; i++){
        for(let j = 0; j < n.length; j++){    
            if(n[i] < n[j]){
                let temp = n[j];
                n[j] = n[i];
                n[i] = temp;
            }
        }
    }
    console.log(n);
    return n;
}