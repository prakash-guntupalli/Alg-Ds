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

// Breadth First Search

//           10
//      6          15
//    3   8     12     17

// [10,6,15,3,8,12,17]

    BFS(){
        var node = this.root,
        data = [],
        queue = [];

        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right)  queue.push(node.right);
        }
        return data;
    }

    // [10,6,3,8,15,12,17]

    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    // [3,8,6,12,17,15,10]

    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    // [3,6,8,10,12,15,17]

    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

}

let tree = new BinarySearchTree();

//Insertion =>  O(logn);
//Search    =>  O(logn);

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(12);
tree.insert(17);

tree.DFSPreOrder();     // [10,6,3,8,15,12,17]
tree.DFSPostOrder();    // [3,8,6,12,17,15,10]
tree.DFSInOrder();      // [3,6,8,10,12,15,17]


// => Time complexity of BFS & DFS are same every node is visited once
// => Space complexity varies, if child nodes are more BFS take more space than DFS

// DFS In-order gives sorted values from small to large value
// DFS Pre-order gives skeleton structure, easy to copy or flatten and reconstruct a tree.

// Trees are non-linear ds that contain a root and child nodes.
// Binary trees can have values of any type but atmost 2 children for each parent
// Binary search trees are a more specific version of Binary trees where every node to the left of its parent is less and every node to the right is greater
// we can search through trees using BFS or DFS

