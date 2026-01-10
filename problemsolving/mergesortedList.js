function mergeList(l1,l2){
    let newList = []
    for (let i = 0; i < l1.length; i++) {
        newList.push(l1[i])
        for (let j = 0; j < l2.length; j++) {
            newList.push(l2[j])
        }   
    }
    return newList
}
console.log(mergeList([1,2,4],[1,3,4]))