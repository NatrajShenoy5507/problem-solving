import List from "./linkedList.js";

let node1 = new List(1);
let node2 = new List(2);
let node3 = new List(3);

node1.next =node2;
node2.next =node3;
node3.next = null;

console.log(node1)