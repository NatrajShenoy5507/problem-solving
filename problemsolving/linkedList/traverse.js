import List from "./linkedList.js";

let node1 = new List(1);
let node2 = new List(2);
let node3 = new List(3);
let node4 = new List(4);
let node5 = new List(5);
let node6 = new List(6);
let node7 = new List(7);

node1.next =node2;
node2.next =node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = null;

node2.next.next.data = 110;

let current=node1;

while(current !== null){
    console.log("Data is: "+ current.data);
    if(current.next === null){
        console.log("NULL next")
    }
    current = current.next;
}