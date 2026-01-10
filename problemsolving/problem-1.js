 function addingNumbers(num, k){
    let max =0;
    let sum;
    if(num.length < k){
        return null
    }
    //first element sum
    for(let i=0; i<k; i++){
        max += num[i];
    }
    sum = max
    //check for next elements
    for(let i =k; i< num.length; i++){
        max = max - num[i - k] + num[i];
        sum = Math.max(sum, max);
    }
    return sum
 }
 let num =[2,1,5,1,3,2];
 let k =4;
 const maxiumSum= addingNumbers(num, k)
 console.log(maxiumSum)