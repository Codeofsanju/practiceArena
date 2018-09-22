/*
    We expect homeCriteria to be a function
    We expect homeCriteria to return a string
    We expect homeCriteria to accept string arguments
    We expect homeCriteria to folow the string pattern: 
    'I am looking for a ${size} bedroom ${type} in ${city}' 
*/

const homeCriteria = (size, type, city) => `I am looking for a ${size} bedroom ${type} in ${city}`;

console.log(homeCriteria(3, 'Apartment', 'NYC'));