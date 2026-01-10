let num =[2,1,5,1,3,2];
let k =3;
let max =0;
let sum;
for(let i =0; i<num.length - k; i++){
    sum = num[i]+num[i+1]+num[i+2]
    if(max < sum){
        max = sum;
    }else{
        continue;
    }
}
console.log(max)