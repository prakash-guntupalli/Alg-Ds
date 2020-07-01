//Stack - linear data structure - Last In First Out / First In Last Out

        (52)    - head
          |
          V
        (43)
          |
          V
        (36)    - tail

        
// Stack push & pop has constant time (unlike singly linked list push & pop where new node is added & removed at the end)

//Stack implementation with array

// Stack implementation from scratch - linked list


class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // add an element to the start/ head
    push(val){
        let newNode = new Node(val);

        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }
        return ++this.length;
    }

    // remove an element to the start/ head
    pop() {
        if(!this.first) return undefined;
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return temp.val;
    }
}

let stack = new Stack();

// stack.push("FIRST")  = FIRST
// stack.push("SECOND") = SECOND -> FIRST
// stack.push("THIRD")  = THIRD -> SECOND -> FIRST

// stack.pop()          = THIRD
// stack.pop()          = SECOND

// Push => O(n)
// Pop  => O(n)