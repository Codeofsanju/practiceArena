
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

// Using filter 
// extensionSearch takes an extension and an array of file names as argument.
// it used the Array.prototype.filter method to return an array with files with the argument
const extensionSearch = (extension, arr) =>{
    return arr.filter((n) => { // most efficient method (no use of includes)
        const ext = n[n.length - 3] + n[n.length-2] + n[n.length-1];
        if(extension === ext){
            return true;
        }
        return false;
    })
    //or
    //return arr.filter((n) => n.includes(extension); // simple but not as efficient
}

//getPopulation: takes 2 arguments. One is a array of country objects, one is an array of
//of country names. Sum the populations of the countries in second argument using country 
//objects of the first argument using array.prototype.reduce

const getPopulation = (arrOfCountries, arrOfName) =>{
    const checker = (sum, country) =>{ // callback function for reduce
        if(arrOfName.includes(country.name) || arrOfName.length === 0){
            return sum + country.population;
        }
        return sum;
    }
    return arrOfCountries.reduce(checker, 0);
}

const keyifyArrayOfObjects = (key, arr) =>{ //EXPLAIN
    console.dir(arr);
    const ans = arr.reduce((accum, superhero) =>{
        accum[superhero[key]] = superhero; // how does this WORK? WAT?
        return accum;
    }, {})
    console.log(ans);
    return ans;
}

  
const powerLevelAverage = (arr) =>{
    const total = (total, superhero) =>{
        return total + superhero.powerLevel;
    }
    return Math.round(arr.reduce(total, 0)/arr.length);
}

  