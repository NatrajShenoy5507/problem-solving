function palindromeCheck(str){
    let last = str.length -1
    let newStr = str.toLowerCase()
    for (let index = 0; index < newStr.length/2; index++) {
        if(newStr[index] != newStr[last]){
            return "Not a Palindrome"
        }
        last --
    }
    return "Is a Palindrome"
}
let newName ="Nitin"
console.log(palindromeCheck(newName))