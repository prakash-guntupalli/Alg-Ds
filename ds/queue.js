// Queue - First In First Out

// Queue implementation with arrays 
// Push() combined with shift()  or  unshift() with pop() - this is effecient since re-indexing doesn't happen

// Queue implementation from scratch

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
}