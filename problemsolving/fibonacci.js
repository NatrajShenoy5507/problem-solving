function fibbonaci(number){
    let n1=0
    let n2=1
    let sum =0
    for (let index = 0; index < number; index++) {
        sum =n1+n2
        n1=n2
        n2=sum 
    }
}
fibbonaci(9)