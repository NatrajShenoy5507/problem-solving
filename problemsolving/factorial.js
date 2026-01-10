//using while loop 
function factorialWhile(number){
    let multiply =1 
    while(number>1){
        multiply *= number
        number --
    } 
    return multiply
}
console.log(factorialWhile(6))