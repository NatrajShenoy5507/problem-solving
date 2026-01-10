function factorialRecursion(n){
    if(n === 0){
        return 1 
    }
    else{
       return factorialRecursion(n-1)*n
    }
}
console.log("With the recursion =", factorialRecursion(6))