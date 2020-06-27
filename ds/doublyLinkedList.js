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
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length ===1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
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

    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let count, current;
        if(index <= this.length/2){
            current = this.head;
            count = 0;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, val){
        let givenNode = this.get(index);
        if(givenNode){
            givenNode.val = val;
            return true;
        }
        return false;
    }
}

let list = new DoublyLinkedList();