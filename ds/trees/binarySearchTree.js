class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(value === current.value) return false;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(value > current.value) {
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value){
        if(!this.root) return undefined;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(value === this.root){
                found = true;
                return true;
            }
            if(value > this.root){
                current = current.right;
            } else if(value < this.root){
                current = current.left;
            }
        }
        return false;
    }

}

let tree = new BinarySearchTree();

//Insertion =>  O(logn);
//Search    =>  O(logn);