
// indexAndValue: using map, return an array of object. Add value, and index properties
const indexAndValue = (arr) =>{
    return arr.map((value, index) =>{
        return {value, index};
    })
}

//swapCase:  
//create the method capitilize that tales a string and capitalizes the string
const capitalize = (word) => word.toUpperCase();
const swapCase = (string) =>{
    const newArr = string.split(' ');
    return newArr.map((value, index) => {
        if(index%2 === 0){
            return capitalize(value);
        }
        return value;
    })
    .join(' ');
}
