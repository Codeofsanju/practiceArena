const sometimes = (func) =>{
    let count = 0;
    return function(){
        count++;
        if(count >= 4 && count%2 === 0){
            return 'I do not know!';
        }
        return func.apply(null, arguments);
    };
}
