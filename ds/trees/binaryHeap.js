// Binary Heap is similar to binary search tree, each parent can have 2 children and left children are filled first
// Binary heaps are used to implement priority Queues and in graph traversal algorithms.

// MaxBinary Heap - Parent nodes are always larger than child nodes (no order between siblings)
// MinBinary Heap - Parent nodes are smaller than child nodes

// For any index of an array 'n', left child will be at '2n+1' & right child at '2n+2'

// similarly parent of a child at 'n' can be found at '(n-1)/2'


class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    
    // insert at the end and the bubble up comparing with parent value
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length -1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx -1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;

        }
    }

    // remove the root element and make recent added one as root, now bubble down comparing children values
    remove() {
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.bubbleDown();
        }
        return max;
    }
    bubbleDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let rightChildIdx = 2*idx +2 ;
            let leftChildIdx = 2*idx +1;
            let rightChild, leftChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }

    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);    //[55, 39, 41, 18, 27, 12, 33]
