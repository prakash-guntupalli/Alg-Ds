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
        }

        this.length++;
        return this;
    }
}

let list = new DoublyLinkedList();
