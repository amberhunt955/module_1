//& Class study

// import { Node, LinkedList, TextNode, ElementNode } from "./data_structures.js";

// // Create three instances of nodes
// const node1 = new Node(4);
// const node2 = new Node(7);
// const node3 = new Node(12);

// console.log(node1);
// console.log(node2);
// console.log(node3);

// // Create a new instance of the Linked List
// const myLinkedList = new LinkedList();

// console.log(myLinkedList);

// // Let's link our nodes inside this linked list
// myLinkedList.head = node1;
// myLinkedList.head.next = node2;
// myLinkedList.head.next.next = node3;

// console.log(myLinkedList);

// // gets head node
// console.log(myLinkedList.getHeadNode());

// // traversing
// myLinkedList.traverse();

// // removing node with value of 7
// // (we aren't necessarily removing it, 
// // we are just reassigning it)
// let walker = myLinkedList.getHeadNode();
// // walker.next = walker.next.next;

// // Swapping
// // at the moment we have walker -> next -> next -> null
// //                          4   ->  7   ->  12  -> null                          
// // we are trying to get walker: 4 -> 12 -> 7 -> null
// let temp = walker.next.next; // Node with 12
// walker.next.next = temp.next; // 7 -> null
// temp.next = walker.next; // 12 -> 7
// walker.next = temp; // 4 -> 12 
// // and now we have walker -> next -> next -> null
// //                    4   ->  12   ->  7  -> null   
// console.log(walker);


// //* Text Node

// const textNode = new TextNode("hello world");
// console.log(textNode);

// //* Element Node

// const div = new ElementNode("div");
// div.setTextContent("Hello element node!")
// console.log(div);

// //* Test

// const p = document.createElement("p");
// p.textContent = "Hello world"
// console.log(p);
// console.dir(p);