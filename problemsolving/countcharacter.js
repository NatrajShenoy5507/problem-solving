function countChar(char){
    const str= char.toLowerCase()
    let tempChar;
    let count =0;
    let characters={};
    for(let i=0; i<str.length; i++){
        tempChar= str[i];
        for(let j=i+1; j<str.length; j++){
            count = 1
            if(tempChar === str[j]){
                characters[tempChar] = ++count;
                console.log(count)
            }
        }
        count = 0
       
    }
    return characters;
}
const findChar = countChar("Natr ajn");
console.log(findChar);