function secondLargestElement(array){
    let n= array.length
    array.sort((a,b)=>a-b)
    for(let i=n-2; i>=0 ;i-- ){
        if (array[i] !== array[n - 1]) {
            return array[i];
        }
    }
    return -1
}
const newArray = [1,5,34,56,7,100, 102]
console.log(secondLargestElement(newArray))