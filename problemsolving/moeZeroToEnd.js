function moveZero(arr) {
    let result = [];
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else {
            result.push(arr[i]);
        }
    }

    while (zeroCount > 0) {
        result.push(0);
        zeroCount--;
    }

    return result;
}

let array = [1, 2, 0, 4, 5, 7, 0, 9];
const moveZeroResult = moveZero(array);
console.log(moveZeroResult);
