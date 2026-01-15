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

/*

Im preparing for the SDET role I have 4 years of qa experience. 
I appeared for the SDET interviews and I got badly rejected due to my poor problem solving skills, Even though I do coding and solve problems of automation using cypress in my work, I couldnt solve it. Im good with javascript, but when I try to solve problem, I feel dumb and panic and could not solve it.

*/