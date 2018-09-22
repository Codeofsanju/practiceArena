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
    2. We expect reverseString to accept a string argument
    3. We expect reverseString to return a string
    4. We expect reverseString to return the reverse of the accepted string argument        
*/

// Manually test this

// 1. We expect reverseString to be a function:
  const isFunction = typeof reverseString === "function"; // notice operand is name of function
 
// 2. We expect reverseString to accept a string argument:
  const stngArg = "StrangerThings";
  
// 3. We expect reverseString to return a string:
  const returnIsString = typeof reverseString(stngArg) === "string"; // notice operand is the function call

// 4. We expect reverseString to return the reverse of the accepted string argument
  const rvrsStrng = "sgnihTregnartS";
  const isCorrect = reverseString(stngArg) === rvrsStrng;

  console.log(`We expect reverseString to be a function: ${isFunction}`);
  console.log(`We expect reverseString to accept StrangerThings as a string argument: ${stngArg}`);
  console.log(`We expect reverseString to return a string: ${returnIsString}`);
  console.log(`We expect reverseString to return sgnihTregnartS for the StrangerThings input: ${isCorrect}`);