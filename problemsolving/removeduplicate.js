// sorting - remove duplicate
function removeDuplicate(arraySet){
    let newArray=[]
    let sortedArray = arraySet.sort((a,b)=> a-b)
    for (let i = 0; i < sortedArray.length; i++) {
        if(sortedArray[i] !== sortedArray[i+1]){
            newArray.push(sortedArray[i])
        } else {
            continue
        }

    }
    return newArray

}

// without using sort
function withoutSort(arr) {
    let arr1 = []
    // let duplicate = arr[0]
    // for (let i = 0; i < arr.length; i++) {
    //     // let count = 1
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] !== arr[j]) {
    //             arr1.push(arr[j])

    //         } else {
    //             continue
    //         }

    //     }

    // }
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < arr1.length; j++) {
             if(arr[i] === arr1[j]){
                isDuplicate = true;
                break
             }


        }
        if(!isDuplicate){
            arr1.push(arr[i])
        }

    }
    return arr1
}
console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]))
// console.log(withoutSort([5, 3, 5, 6, 10, 11, 3,3,3,3,3]))

