// Linked list contains a head, tail & length property
// It consists of nodes, each node has a value & pointer to next node or null.
// compared to array, insertion & deletion are easy and also there is no concept of index.


class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let latest = new Node(val);
        
        if(!this.head){
            this.head = latest;
            this.tail = this.head;
        } else {
            this.tail.next = latest;
            this.tail = latest;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        else {
            let current = this.head;
            let newTail = current;

            while(current.next){
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return current;
        }

    }
}

let list = new SinglyLinkedList();

//list.push("Hi");      => length:1 , Hi
//list.push("there");   => length:2 , Hi->There


//list.pop();           => "there" (popped element)
//list;                 => "Hi"