// concatString
function concatString() {
    return Array.from(arguments).join('');
}


function yourFunctionRunner(){
    let ans = '';
    for(let i = 0; i < arguments.length; i++){
        ans += arguments[i]();
    }
    return ans;
}

const once = (someFunc) =>{
    let notCalled = true;
    return () => {
        if(notCalled) {
            notCalled = false;
            return someFunc();
        }
        return 'the nested function has already been called...';
    }
}


//makeAdder
const makeAdder = (n) => {
    return function(m){
        return m + n;
    };
};

//shared contexts
const createObjectWithClosures = () =>{
    let total = 0;
    return{
        oneIncrementer: () =>{
            total+=1;
        },
        tensIncrementer: () =>{
            total+=10;
        },
        getValue: () =>{
            return total;
        },
        setValue:(n) =>{
            total = n;
        }
    }
}

const dontSpillTheBeans = (secret) => {
    return{
        getSecret: ()=>{
            return secret; 
        },
        setSecret: (n)=>{
            secret = n;
        }
    }
}