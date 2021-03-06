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

    insert(index, val){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length-1) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index-1);

        let afterNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = afterNode;
        newNode.prev = prevNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length -1) return this.pop();

        let prevNode = this.get(index-1);
        let delNode = prevNode.next;
        let afterNode = delNode.next;
        prevNode.next = afterNode.prev;
        delNode.prev = null;
        delNode.next = null;

        this.length--;
        return delNode;
    }
}

let list = new DoublyLinkedList();


// Insert - O(1)
// Remove - O(1)
// Search - O(n/2) ~ O(n)
// Access - O(n)

// search is efficient than single linked list
// but it takes more memory