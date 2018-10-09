const pigify = (sentence) =>{
    const split = sentence.split(' ');
    if(split.length === 1){ // for 1 word
        if('qu'.includes(sentence[0]+sentence[1])){
            return pigify(sentence.slice(2,sentence.length)+sentence[0]+sentence[1]);
        }
        else if('bcdfghjklmnpqrstvxzBCDFGHJKLMNPQRSTVXZ'.includes(sentence[0])){
            return pigify(sentence.slice(1,sentence.length)+sentence[0]);
        }
        return `${sentence}ay`;
    }
    else if(split.length > 1){
        return split.map(n => pigify(n)).join(' ');
    }
}



