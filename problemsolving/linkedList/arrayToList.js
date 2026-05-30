import List from "./linkedList.js";

function createList(arr){
    let head = new List(arr[0]);
    let current = head;
    
    for(let i=1; i< arr.length; i++){
        current.next = new List(arr[i]);
        current =current.next;
    }
 return head;
}
let arr =[1,2,3,4,5,6,7,8,9,0];
let finalList = createList(arr);
console.log(finalList)