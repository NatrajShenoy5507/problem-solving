function romanToInt(romanLetters) {
    let value =0
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    for (let i = 0; i < romanLetters.length; i++) {
        if (roman[romanLetters[i]] < roman[romanLetters[i+1]]) {
            value = value - roman[romanLetters[i]]
        }else{
            value = value + roman[romanLetters[i]]
        }
    }
    return value
}
console.log(romanToInt("IV"))