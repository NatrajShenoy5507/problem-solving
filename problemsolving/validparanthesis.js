function validParenthesis(s){
    let stack = []; // our bracket pile
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); // add opening bracket to the stack
        } else {
            // if stack is empty OR top item in stack doesn't match current closing bracket
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    // if stack is empty, it's valid!
    return stack.length === 0;
}
console.log(validParenthesis("([])"))