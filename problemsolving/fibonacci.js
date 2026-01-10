function fibbonaci(number){
    let n1=0
    let n2=1
    let sum =0
    console.log(n1);
    console.log(n2);
    for (let index = 0; index < number; index++) {
        sum = n1+n2;
        // console.log(sum);
        n1=n2
        n2=sum 
        if(sum > number){
            break
        }
        console.log(sum);
    }
}
fibbonaci(50)