/*
    We expect homeCriteria to be a function
    We expect homeCriteria to return a string
    We expect homeCriteria to accept string arguments
    We expect homeCriteria to folow the string pattern: 
    'I am looking for a ${size} bedroom ${type} in ${city}' 
*/

const homeCriteria = (size, type, city) => `I am looking for a ${size} bedroom ${type} in ${city}`;

console.log(homeCriteria(3, 'Apartment', 'NYC'));


/*
    Now try to do the same in reverse. Given the following code, figure out the expectations of it:
*/
const reverseString = (str) => {
    let reversedString = "";
  
    for(let lastIndex = str.length -1; lastIndex >= 0; lastIndex--) {
      reversedString += str[lastIndex];
    }
  
    return reversedString;
  }
  
  reverseString('StrangerThings');

/*
    1. We expect reverseString to be a function
    2. We expect reverseString to return a string
    3. We expect reverseString to accept a string argument
    4. We expect reverseString to return the reverse of the accepted string argument        
*/