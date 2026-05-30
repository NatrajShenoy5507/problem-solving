import List from "./linkedList.js";

let arr =[1,2,3,4,5,6,7,8,9,0];
let head = new List(arr[0]);
let current = head;

for(let i=1; i< arr.length; i++){
    current.next = new List(arr[i]);
    current =current.next;
}
console.log(head) 