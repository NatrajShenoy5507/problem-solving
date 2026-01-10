function removeElement(nums, value){
    const eArr= [];
    for (let i = 0; i < nums.length; i++) {
        if(value === nums[i]){
            continue
        }
    else{
        eArr.push(nums[i]);
    }
    }
    return eArr;
}
console.log(removeElement([3,2,5,4], 3))