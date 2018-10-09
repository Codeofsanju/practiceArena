const accessor = (obj) =>{
    return function (key, value = ''){
        if(value === ''){
            return obj[key];
        }
        else{
            obj[key] = value;
        }
    }
    
}

