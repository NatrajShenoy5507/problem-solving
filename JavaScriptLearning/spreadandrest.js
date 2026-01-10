//SPREAD Operator
var maxMath=Math.max(2,45,68,2,1,4,5,6)
console.log(maxMath)
var myObj={

}
Object.assign(myObj,{a:1,b:2,c:3}, {m:10,n:11,o:12})
console.log(myObj)

function sumOne(a,b){
    return a+b;
}
var myArray=[5,4]
console.log(sumOne(...myArray)) //Spread Operator : Takes in as group and spreads it 

function sumTwo(...args){ //args convert individual values into the array
    console.log(args)
    let sum = 0;
    for (const arg of args) {
        sum = sum+arg 
    }
    return sum;
}
console.log(sumTwo(02,03,10))

//REST Operator
function productTwo(a,b,...args){ //args convert individual values into the array
    console.log(args)
    let sum = 0;
    let multi= a*b;
    for (const arg of args) {
        sum = sum+arg 
    }
    return [sum, multi];
}
console.log(productTwo(02,03,10))
