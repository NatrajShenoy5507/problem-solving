function reverseArray(array){
    let arrayLength = array.length -1
    let reverseArray= []
    for (let index =arrayLength ; index >=0 ; index--) {
        reverseArray.push(array[index])
    }
    return reverseArray
}
const array =[1,2,3]
console.log(reverseArray(array))