function search(func) {
    let bool = false;
    this.forEach((n) =>{ // this context is array from spec
        if(func(n)){
            bool = true;
        }
        else if(Array.isArray(n) && bool === false){
            bool = search.call(n, func); // this context changed to nested array
        }
    })
    return bool;
}

