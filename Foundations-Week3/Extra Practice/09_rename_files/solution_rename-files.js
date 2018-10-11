function renameFiles(arr){
    let ans = [];
    let count = 0;
    let test = arr.map((n) =>{
        if(!ans.includes(n)){
            ans.push(n);
        }
        else{
            if(ans.length === arr.length) return ans;
            count++;
            n = `${n}(${count})`;
            return renameFiles(test);
        }
    })
    console.log(ans);
    return ans;
}