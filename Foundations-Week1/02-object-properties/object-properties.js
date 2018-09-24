const setPropsOnObj  = (object) => {
    object.x = 7;
    object['y'] = 8;
    object.onePlus = (a) => a+1;
}


const setPropsOnArr = (arrayObject) => {
    arrayObject[0] = 5;
    arrayObject.hello = () => `Hello!`;
    arrayObject.full = 'stack';
    arrayObject.twoTimes = (n) => n*2;
}

const setPropsOnFunc = (functionObject) => {
    functionObject.year = '20??';
    functionObject.divideByTwo = (n) => n/2;
}

const shallowCopy = (first, second) => {
    let ans;
    if(Array.isArray(first)){ // check if it is a array
        ans = [...first, ...second];
        return ans;
    }
    ans = {...first, ...second};
    return ans;
}