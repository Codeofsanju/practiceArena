
const mapQuest = (arr) =>{
    function oppFinder(dir){
        switch(dir){
        case 'N': return 'S'; 
        case 'S': return 'N'; 
        case 'E': return 'W';
        case 'W': return 'E';
        }
    }
    return arr.reduce((acumm, n) => {
        acumm[acumm.length -1] === oppFinder(n) ? acumm.pop() : acumm.push(n);
        return acumm;
    },[])    
}