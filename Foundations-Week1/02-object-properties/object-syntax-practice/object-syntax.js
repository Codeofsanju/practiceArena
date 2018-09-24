
const name = 'Cody';
const bark = () => 'ruff ruff!';
const loud = 'loud';
const dog = {
    name,
    bark,
    [`${loud}Bark`]: function (){
        return bark().toUpperCase();
    },
}

