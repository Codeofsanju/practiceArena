const snacks = {
    fruit: 'apple',
    tastySnacks: ['gummy bears', 'cheesecake']
}

console.log(Object.getPrototypeOf(snacks.tastySnacks));


// Follow up a prototype chain and print all object prototypes as an array
const traceTheChain = (object) =>{
    let proto = [];
    while(Object.getPrototypeOf(object)){   // while it is not NULL
        object = Object.getPrototypeOf(object);
        traceTheChain.push(object);
    }
    return proto;
}