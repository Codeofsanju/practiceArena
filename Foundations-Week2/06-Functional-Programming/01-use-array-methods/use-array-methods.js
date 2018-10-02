
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
    const ans = arr.reduce((accum, superhero) =>{
        accum[superhero[key]] = superhero; // how does this WORK? WAT?
        return accum;
    }, {})
    return ans;
}

  
const powerLevelAverage = (arr) =>{
    const total = (total, superhero) =>{
        return total + superhero.powerLevel;
    }
    return Math.round(arr.reduce(total, 0)/arr.length);
}

// Recreate map using reduce
const mapReduce = (arr, callBack) =>{
    return arr.reduce((accum, index)=> {
        accum.push(callBack(index));
        return accum;
    }, [])
}

// Recreate filter using reduce
const filterReduce = (arr, callBack) =>{
    return arr.reduce((accum, index) => {
        if(callBack(index)){
            accum.push(index);
        }
        return accum;
    },[])
}

//Method Chaining 

// inYourBudget - returns a array, takes a budget and objects of items as argument
// returns all items names you can afford
const inYourBudget = (budget, arr) =>{
    const newArr = arr.filter((value) => value.price <= budget && value);
    return newArr.map((n) =>{
        if(newArr.length === 0){
            return [];
        }
        return n.item;
    })
    // OR
    //return arr.filter((obj) => obj.price <= budget).map((obj)=> obj.item);
}

// Seperate and return names
// Seperates the name properties and creates 'firstName' and 'lastName' properties
// returns an array of either first or last names based on the second argument
// // and the third argument max length of string name
// used map and filter to accomplish this

const separateAndReturnNames = (arr, nameArg, max) =>{
    return arr.map((obj)=> { // split name, add firstName, lastName property
        nameArr = obj.name.split(' ');
        obj.firstName = nameArr[0];
        obj.lastName = nameArr[1];
        return obj;
    })
    .filter((obj)=> obj[nameArg].length <= max) // filter out names that are longer then max
    .map((obj) => obj[nameArg]); // return only name
}

// returns total time needed to complete high priority tasks
// takes a todo list for argument: todo list is an array of objects
// with name, duration, priority properties
// use filter and reduce

const priorityTodoDuration = (arr) =>{
    return arr.filter((obj)=> obj.priority === 'high')
    .reduce((accum, obj)=>{
        return accum + obj.duration;
    },0)
}


