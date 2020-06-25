//Each node has a pointer to next node and a pointer to previous node
//list can be accessed in both directions, more flexibility but takes more space


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let latest = new Node(val);

        if(!this.head){
            this.head = latest;
            this.tail = this.head;
        } else {
            this.tail.next = latest;
            latest.prev = this.tail;
            this.tail = latest;
        }

        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let element = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = element.prev;
            this.tail.next = null;
            element.prev = null;
        }
        this.length--;
        return element;
    }

    shift(){
        if(!this.head) return undefined;
        var newHead = this.head.next;
        var oldHead = this.head;
        newHead.prev = null;
        oldHead.next = null;
        this.head = newHead;

        this.length--;
        return oldHead;
    }

    unshift(val){
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

let list = new DoublyLinkedList();
