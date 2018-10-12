function renameFiles(arr){
    let uniqueName = function(name, ext){name,ext};
    const dir = arr.map(n =>{ // splits name and extentions to objects 
        const toStore = new uniqueName;
        if(n.indexOf('(') !== -1){
            toStore['name'] = n.slice(0, n.indexOf('('));
            toStore['ext'] = parseInt(n.slice(n.indexOf('(')+1, n.indexOf(')')), 10);
            return toStore;
        }
        else{
            toStore['name'] = n;
            toStore['ext'] = -1;
            return toStore;
        }
    })

    const order = dir.map((n, index) => { // Maps files that already have extension in input
        if(n.ext !== -1){
            return `${n.name}(${n.ext})`;
        }
    }).filter(n => n !== undefined);

    for(let i = 0; i < dir.length; i++){ // updates extension for repeats
        let currExt = 0;
        for(let j = 0; j < dir.length; j++){
            if(dir[i].name === dir[j].name){
                dir[j].ext = currExt++;
            }
        }
    }

    const ans =  dir.map(n =>{
        if(n.ext === 0){
            return n.name;
        }
        return `${n.name}(${n.ext})`;
    })
    
    if(order.length === 0){ // does not need to perserve order
        return ans;
    }
    else{ // does need to perserve order
        for(let i = 0; i < ans.length; i++){
            for(let j = 0; j < order.length; j++){
                if(ans[i] === order[j]){
                    ans.splice(i,1);
                }
            }
        }
        for(let i = order.length-1; i >= 0; i--){
            ans.unshift(order[i]);
        }
        return ans;
    }
}



