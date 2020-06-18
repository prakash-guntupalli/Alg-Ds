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

    //add an element at the end
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

    //remove an element at the end
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

    //remove an element at the start
    shift() {
        if(!this.head) return undefined;
        else {
            if(this.length > 0){
                let newHead = this.head;
                this.head = newHead.next;

                this.length--;
                if(this.length === 0){
                    this.tail = null;
                }
                return newHead;

            }
        }
        this.length--;
    }


    //add an element at the start
    unshift(val) {
        let newHead = new Node(val);

        if(!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    //return the element value at given index
    get(index){
        let current = this.head;
        let counter = 0;

        if((index >0 && index < this.length) && this.length > 0){

            while(counter !== index){
                current = current.next;
                counter++;
            }
            return current;

        } else {
            return null;
        }
    }

    //change the node value at given place
    set(index, val){
        let getNode = this.get(index);
        if(getNode){
            getNode.val = val;
            return true;
        }
        return false;
    }

    //create a node with given value and insert it at given index
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let getNode = this.get(index-1);
        let temp = getNode.next;
        getNode.next = newNode;
        newNode.next = temp;
        this.length++;

        return true;
    }

}

let list = new SinglyLinkedList();

//list.push("Hi");      => length:1 , Hi
//list.push("there");   => length:2 , Hi->There


//list.pop();           => length: 1, "there" (popped element)
//list;                 => "Hi"

//list                  => 5,6,7
//list.shift()          => length:2, (5)


//list.unshift("hi")    => "hi" - length:1
//list.unshift("hello") => "hello","hi" - length:2


//list              => 1,2,3,4,5
//list.get(3)       => 4


//list              => 1,2,3,4,5
//list.set(3, 55)   => true
//list              => 1,2,3,55,5


//list              => 1,2,3,4,5
//list.insert(2,33) => 1,2,33,4,5