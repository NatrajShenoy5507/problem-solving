function commonStr(strs){
    let prefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        let currentChar = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== currentChar) {
                return prefix;
            }
        }

        prefix += currentChar;
    }

    return prefix;
}
let str =["flower","flow","flight"]
console.log(commonStr(str))