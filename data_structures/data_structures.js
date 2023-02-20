// Node Basic Class
// The export keyword makes this class available outside of this module (file)
export class Node {
    constructor(data) {
        this.data = data;
    }
    next = null;
}

// Linked List Class
export class LinkedList {
    constructor() {
        this.head = null;
    }

    getHeadNode() {
        return this.head;
    }

    clear() {
        this.head = null;
    }
    
    traverse() {
        let walker = this.head; // first node in the list
        while(walker.next) { // while walker.next != null is true
            console.log(walker.data)
            walker = walker.next; // moving to the next Node
        }
    } 

    getLast() {
    }

    appendNodeEnd() {
    }
}

export class TextNode {
    constructor(data) {
        this.data = data;
        this.length = length;
    }
}

export class ElementNode {
    constructor(name) {
        this.elementName = name;
        this.textContent = null;
        this.outerHTML = null;
    }

    setTextContent(text) {
        this.textContent = text;
        this.outerHTML = this.#setOuterHTML();
    }

    #setOuterHTML() {
        return `<${this.elementName}>${this.textContent}<${this.elementName}>`
    }
}