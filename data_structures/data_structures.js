//& Class study

// // Node Basic Class
// // The export keyword makes this class available outside of this module (file)
// export class Node {
//     constructor(data) {
//         this.data = data;
//     }
//     next = null;
// }

// // Linked List Class
// export class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     getHeadNode() {
//         return this.head;
//     }

//     clear() {
//         this.head = null;
//     }
    
//     traverse() {
//         let walker = this.head; // first node in the list
//         while(walker.next) { // while walker.next != null is true
//             console.log(walker.data)
//             walker = walker.next; // moving to the next Node
//         }
//     } 

//     getLast() {
//     }

//     appendNodeEnd() {
//     }
// }

// export class TextNode {
//     constructor(data) {
//         this.data = data;
//         this.length = length;
//     }
// }

// export class ElementNode {
//     constructor(name) {
//         this.elementName = name;
//         this.textContent = null;
//         this.outerHTML = null;
//     }

//     setTextContent(text) {
//         this.textContent = text;
//         this.outerHTML = this.#setOuterHTML();
//     }

//     #setOuterHTML() {
//         return `<${this.elementName}>${this.textContent}<${this.elementName}>`
//     }
// }

//& Self study

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //* Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //* Insert last node
    insertLast(data) {
        // Create the node to be inserted at the end of the linked list
        let node = new Node(data);
        // Initialize the variable currentNode
        let currentNode;

        // If linked list is empty, then then make node the head node
        if (this.head === null) {
            this.head = node;
        } else {
            // We need to loop through the nodes starting at the head
            currentNode = this.head;
            
            while(currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        // Increase the size
        this.size++;
    }

    //* Insert at index
    insertAt(data, index) {
        // If index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        // If first index
        if (index === 0) {
            this.head = new Node(data, this.head);
            this.size++;
            return;
        }

        // Create the node to be inserted
        const node = new Node(data);
        // Initialize two new variables
        let currentNode, previousNode;

        // Set current node to first
        currentNode = this.head;
        let count = 0; // Now we need to loop through the nodes

        while (count < index) {
            previousNode = currentNode; // Node before index
            count++;
            currentNode = currentNode.next; // Node after the index
        }

        node.next = currentNode;
        previousNode.next = node;
        this.size++;
    }

    //* Get at index
    getAt(index) {
        let currentNode = this.head;
        let count = 0;
        let dataAtIndex;

        while (currentNode) {
            // this will tell us which node we need
            if (count === index) {
                dataAtIndex = currentNode.data;
                console.log(dataAtIndex);
            }
            count++;
            currentNode = currentNode.next;
        }

        return dataAtIndex;
    }

    //* Remove at index
    removeAt (index) {
        // If out of range, then just return
        if (index > 0 && index > this.size - 1) {
            return;
        }

        let currentNode = this.head;
        let previousNode;
        let count = 0;

        if (index === 0) { // removing the first node
            this.head = currentNode.next; 
            this.size--;
        } else {
            while(count < index) {
                count++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
            this.size--;
        }
    }

    //* Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    //* Print list data
    printListData() {
        let currentNode = this.head;

        while(currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 0);
console.log(ll);
ll.printListData();
console.log("Get at 2");
ll.getAt(2);
console.log("Remove at 2");
ll.removeAt(2);
ll.printListData();
console.log(ll);
ll.clearList();
console.log(ll);