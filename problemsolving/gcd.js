// finding greatest common divisor GCD
function gcd(n1, n2){
    //Euclid algorithm
    if(n1===0){
        return n2;
    }
    if(n2===0){
        return n1;
    }
    if(n1===n2){
        return n2;
    }
    if(n1>n2){
        return gcd(n1-n2,n2)
    }else{
        return gcd(n1, n2-n1)
    }

}
const greatestCommonDivisor= gcd(36, 60);
console.log(greatestCommonDivisor)
