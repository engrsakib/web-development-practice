function checkName(name){
    if(typeof name !== 'string'){
        return 'Invalid name'
    }
    const lastLetter = name[name.length - 1];
    const letters = ['a', 'y', 'e', 'i', 'o', 'u', 'w'];

    let isFound = false;
    for(let i = 0; i < letters.length; i++){
        letters[i] === lastLetter &&  (isFound = true)  
    }
    return isFound ? 'Good Name' : 'Bad Name';

}

console.log(checkName("a"));